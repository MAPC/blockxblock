import Ember from 'ember';
import arrayify from '../utils/arrayify';
import applyFiltersTo, { getFilter } from '../utils/apply-filter-to';
import setChoroplethColor from '../utils/set-choropleth-color';
import { number_format } from 'ember-string-helpers/utils/functions';
import monthsBetween from '../utils/months-between';
import config from '../config/environment';
import computed from 'ember-computed';
import csvFactory from '../utils/csv-factory';

import {  FEATURE_TYPES,
          FEATURE_FILTERS_CONFIG } from '../models/place';

import {  INVESTMENT_TYPES,
          INVESTMENT_STATUSES,
          INVESTMENT_SOURCES,
          INVESTMENT_FILTERS_CONFIG } from '../models/investment';

import {  PARCEL_PARAMS,
          PARCEL_TYPES,
          PARCEL_FILTERS_CONFIG,
          PARCEL_MAP_CONFIG,
          PARCEL_OWNERSHIP_TYPES,
          GFVACANCY_STATUSES,
          UFVACANCY_STATUSES  } from '../models/parcel';

const SPECIAL_QUERYP_CONFIG = [ { 'activating'                : { type: 'boolean' }}, 
                                { 'featureOpen'               : { type: 'boolean' }}, 
                                { 'forSale'                   : { type: 'boolean' }}, 
                                { 'forLease'                  : { type: 'boolean' }},
                                { 'isEngagedOwner'            : { type: 'boolean' }},
                                { 'employer'                  : { type: 'boolean' }},
                                { 'is_employer'               : { type: 'boolean' }},
                                { 'is_street_activating'      : { type: 'boolean' }},
                                { 'is_tdi_asset'              : { type: 'boolean' }},
                                { 'is_tdi_influenced'         : { type: 'boolean' }},
                                { 'is_feature_owner_engaged'  : { type: 'boolean' }},
                                { 'is_collision_point'        : { type: 'boolean' }} ];

const INVESTMENT_PARAMS = ['is_tdi_influenced', 'investmentTypes', 'valueMin', 'valueMax', 'investmentStatuses', 'investmentSources', 'investments_fake_open_or_closed'];
const FEATURE_PARAMS = ['assetTypes', 'activating', 'featureOpen', 'employer', 'fake_open_or_closed', 'is_employer', 'is_street_activating', 'is_tdi_asset', 'is_feature_owner_engaged', 'is_collision_point'];

export default Ember.Controller.extend({
  queryParams: ['showInvestments','showFeatures','showParcels']
                .concat(FEATURE_PARAMS, 
                        INVESTMENT_PARAMS, 
                        PARCEL_PARAMS, 
                        SPECIAL_QUERYP_CONFIG),
  currentCity: Ember.inject.service(),

  // features
  assetTypes: FEATURE_TYPES.join('|'),
  assetTypesArray: computed('assetTypes', arrayify('assetTypes', '|')),
  assetTypeOptions: FEATURE_TYPES,
  is_street_activating: false,
  featureOpen: null,
  employer: null,

  // investments
  investmentTypes: INVESTMENT_TYPES.join('|'),
  investmentTypesArray: computed('investmentTypes', arrayify('investmentTypes', '|')),
  investmentTypeOptions: INVESTMENT_TYPES,

  investmentStatuses: 'Completed',
  investmentStatusesArray: computed('investmentStatuses', arrayify('investmentStatuses', '|')),
  investmentStatusesOptions: INVESTMENT_STATUSES,

  investmentSources: INVESTMENT_SOURCES.join('|'),
  investmentSourcesArray: computed('investmentSources', arrayify('investmentSources', '|')),
  investmentSourcesOptions: INVESTMENT_SOURCES,

  allInvestments: computed.alias('currentCity.city.investments'),
  amounts_estimates: computed.mapBy('allInvestments', 'amount_estimated'),
  amountsMin: computed.min('amounts_estimates'),
  amountsMax: computed.max('amounts_estimates'),

  valueMin: 0,
  valueMax: 20000000,
  is_tdi_influenced: true,

  // parcels 
  landuseTypes: '',
  landuseTypesArray: computed('landuseTypes', arrayify('landuseTypes', '|')),
  landuseTypeOptions: PARCEL_TYPES,

  GFVacancyStatuses: '',
  GFVacancyStatusesArray: computed('GFVacancyStatuses', arrayify('GFVacancyStatuses', '|')),
  GFVacancyStatusesOptions: GFVACANCY_STATUSES,

  UFVacancyStatuses: '',
  UFVacancyStatusesArray: computed('UFVacancyStatuses', arrayify('UFVacancyStatuses', '|')),
  UFVacancyStatusesOptions: UFVACANCY_STATUSES,

  OwnershipTypes: '',
  OwnershipTypesArray: computed('OwnershipTypes', arrayify('OwnershipTypes', '|')),
  OwnershipTypesOptions: PARCEL_OWNERSHIP_TYPES,

  groundFloorVacancyMin: 0,
  groundFloorVacancyMax: null,
  forSale: null,
  forLease: null,
  yearBuiltMin: 1700,
  yearBuiltMax: null,

  // UI state
  showInvestments: true,
  showFeatures: true,
  showParcels: false,
  isExporting: false,

  choroplethLayer: 'Available Spaces',
  parcelsChoroplethMapping: computed('visibleParcels', 'choroplethLayer', function() {
    return (feature) => {
      let color = setChoroplethColor(feature, this.get('choroplethLayer'), PARCEL_MAP_CONFIG),
          stroke = true,
          fillOpacity=0.5,
          strokeOpacity=1,
          weight=1;
      return {
        color,
        stroke,
        fillOpacity,
        strokeOpacity,
        weight
      }
    }
  }),

  parcelChoroplethConfig: PARCEL_MAP_CONFIG,
  parcelChoroplethSets: PARCEL_MAP_CONFIG.mapBy('setName'),
  iconCreateFunction: function(cluster) {
    let count = cluster.getChildCount();
    return L.divIcon({className: 'dynamic-cluster',  iconSize: [39,39], html: `<h3 class="ui inverted header">${count}</h3>`});
  },

  currentFeature: null,
  hideSidebar: false,

  // applied computed filters
  visibleFeatures: computed(...FEATURE_PARAMS, 'investmentIcons', 'currentCity.city.places', 
    applyFiltersTo('currentCity.city.places', FEATURE_FILTERS_CONFIG)),

  visibleInvestments: computed(...INVESTMENT_PARAMS, 'currentCity.city.investments', 
    applyFiltersTo('currentCity.city.investments', INVESTMENT_FILTERS_CONFIG)),

  visibleParcels: computed(...PARCEL_PARAMS, 'currentCity.city.parcels', 
    applyFiltersTo('currentCity.city.parcels', PARCEL_FILTERS_CONFIG)),

  actions: {
    selectCity(city) {
      let id = city.get('id');
      this.transitionToRoute('cities.city.city-filters', id);
    },
    composeList(option, optionsList) {
      let list = this.get(optionsList).split('|');
      if(list.isAny('', option)) {
        list.removeObject(option);
      } else {
        list.pushObject(option);
      }
      this.set(optionsList, list.join('|'));
    },
    updateRanges(test) {
      this.set('valueMin', test[0]);
      this.set('valueMax', test[1]);
    },
    openModal(name, feature) {
      $('.ui.' + name + '.modal').modal('show');
      this.set('currentFeature', feature);
    },
    linkTo(route, model) {
      this.transitionToRoute(route, model);
    },
    changeProperty(key, value) {
      this.set(key, value);
    },
    updateDate(date){
      this.set('fake_open_or_closed', new Date(date));
      this.set('investments_fake_open_or_closed', new Date(date));
    },
    updateSliderDate(val) {
      this.set('fake_open_or_closed', val);
    },
    export_csv(resource, exceptions) {
      let resources = csvFactory(this.get(resource), exceptions);
      this.get('csv').export(resources, {fileName: `${resource}.csv`});
    }
  },

  investmentsValues: computed.mapBy('visibleInvestments', 'value'),
  maxInvestments: computed.max('investmentsValues', 'visibleInvestments'),

  tooltipsConfig: [
    { to: (num) => number_format(num, 0) },
    { to: (num) => number_format(num, 0) }
  ]
});

