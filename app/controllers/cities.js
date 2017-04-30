import Ember from 'ember';
import arrayify from '../utils/arrayify';
import applyFiltersTo, { getFilter } from '../utils/apply-filter-to';
import setChoroplethColor from '../utils/set-choropleth-color';
import { number_format } from 'ember-string-helpers/utils/functions';
import { nest } from 'd3-collection';
import monthsBetween from '../utils/months-between';
import config from '../config/environment';
import computed from 'ember-computed';

import {  FEATURE_PARAMS, 
          FEATURE_TYPES,
          FEATURE_FILTERS_CONFIG } from '../models/feature';

import {  INVESTMENT_PARAMS,
          INVESTMENT_TYPES,
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
export default Ember.Controller.extend({
  queryParams: ['showInvestments','showFeatures','showParcels']
                .concat(Ember.copy(FEATURE_PARAMS).removeObject('fake_open_or_closed'), 
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
  
  latestDate: computed('featuresOpenDates.[]', function() {
    let featuresOpenDates = this.get('featuresOpenDates');
    console.log(featuresOpenDates);
    return featuresOpenDates[featuresOpenDates.length-1].key;
  }),

  setLatestDate: function() {
    this.set('fake_open_or_closed', this.get('latestDate'));
  }.on('init'),

  fake_open_or_closed: null,
  investments_fake_open_or_closed: null,
  featuresOpenDates: computed('currentCity.city.features.[]', 'currentCity.city.investments.[]', function() {
    let dates = Ember.A();
    this.get('currentCity.city.features').forEach((feature) => { dates.pushObjects(feature.get('datesOpen')); });
    this.get('currentCity.city.investments').forEach((investment) => { dates.pushObjects(investment.get('datesOpen')); });

    let grouped = nest().key((d) => { return d.date })
                        .key((d) => { return d.type })
                        .rollup((d) => { return d.length; })
                        .entries(dates)
                        .sortBy((el) => { return el.key; });

    grouped = grouped.map((el) => { 
      let date = new Date(el.key);
      let obj = { key: `${date.getFullYear()}-${date.getMonth()}-01` };
      let type1 = el.values[0];
      let type2 = el.values[1];

      if(type1) {
        obj[type1.key] = type1.value;
      }

      if(type2) {
        obj[type2.key] = type2.value;
      }
      
      return obj;
    });

    return grouped.sortBy((el) => { return new Date(el.key); });
  }),

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
    // cluster.getChildCount()
    return L.icon({ iconUrl: `${config.prepend ? config.prepend : '/'}images/icons/investments/cluster.png`, iconSize: [41,41] });
  },

  currentFeature: null,
  hideSidebar: false,

  // applied computed filters
  visibleFeatures: computed(...FEATURE_PARAMS, 'currentCity.city.features', 
    applyFiltersTo('currentCity.city.features', FEATURE_FILTERS_CONFIG)),

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
    toggleSidebar() {
      let map = this.get('mapInstance');
      this.toggleProperty('hideSidebar');
      Ember.run.next(this, () => {
        $('.list-results')
          .transition({
            animation: 'fade right',
            className: {
              'hidden': 'hidden-custom'
            },
            onStart() {
              map.invalidateSize();
            },
            onComplete() {
              map.invalidateSize();
            }
          });
        ;
      });

    },
    updateDate(date){
      this.set('fake_open_or_closed', new Date(date));
      this.set('investments_fake_open_or_closed', new Date(date));
    }
  },

  investmentsValues: computed.mapBy('visibleInvestments', 'value'),
  maxInvestments: computed.max('investmentsValues', 'visibleInvestments'),

  tooltipsConfig: [
    { to: (num) => number_format(num, 0) },
    { to: (num) => number_format(num, 0) }
  ]
});
