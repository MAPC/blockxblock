import Ember from 'ember';
import computed from 'ember-computed';
import applyFiltersTo, { getFilter } from '../utils/apply-filter-to';
import arrayify from '../utils/arrayify';

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

const INVESTMENT_PARAMS = ['is_tdi_influenced', 'investmentTypesArray.[]', 'valueMin', 'valueMax', 'investmentStatuses', 'investmentSources', 'investments_fake_open_or_closed'];
const FEATURE_PARAMS = ['assetTypesArray.[]','activating','isOpen','is_employer','tdi_asset','engaged_owner','community_hub'];
[INVESTMENT_PARAMS, FEATURE_PARAMS].forEach(paramsList => paramsList.push('timelineDate'));

const SOUTHWICK_LATITUDE = 42.1;
const SOUTHWICK_LONGITUDE = -71.6;
const DEFAULT_ZOOM = 17;

export default Ember.Service.extend({
  mapInstance: null,
  latitude: SOUTHWICK_LATITUDE,
  longitude: SOUTHWICK_LONGITUDE,
  zoom: DEFAULT_ZOOM,
  setCity(city) {
    this.set('city', city);
    let latitude = city.get('latitude');
    let longitude = city.get('longitude');
    Ember.run.next(this, () => {
      this.setProperties({
        latitude,
        longitude
      });
    });
  },
  setAllInvestments(investments) {
    this.set('all_investments', investments);
  },
  city: '',
  all_investments: null,

  startYear: 2013,
  timelineYear: String((new Date()).getFullYear()),
  timelineMonth: (() => {
    const month = (new Date()).getMonth() + 1;
    return String(month >= 10 ? month : `0${month}`);
  })(),
  timelineDate: computed('timelineYear', 'timelineMonth', function() {
    return {
      year: this.get('timelineYear'),
      month: this.get('timelineMonth'),
    };
  }),

  parcelChoroplethSets: PARCEL_MAP_CONFIG.mapBy('setName'),
  parcelChoroplethConfig: PARCEL_MAP_CONFIG,
  choroplethLayer: 'Land Use',
  landuseTypesArray: computed('landuseTypes', arrayify('landuseTypes', '|')),
  landuseTypes: '',
  landuseTypeOptions: PARCEL_TYPES,

  GFVacancyStatuses: '',
  GFVacancyStatusesArray: computed('GFVacancyStatuses', arrayify('GFVacancyStatuses', '|')),
  GFVacancyStatusesOptions: GFVACANCY_STATUSES,

  UFVacancyStatuses: '',
  UFVacancyStatusesArray: computed('UFVacancyStatuses', arrayify('UFVacancyStatuses', '|')),
  UFVacancyStatusesOptions: UFVACANCY_STATUSES,

  showInvestments: true,
  showPlaces: true,
  showParcels: false,

  assetTypes: FEATURE_TYPES.join('|'),
  assetTypesArray: computed('assetTypes', arrayify('assetTypes', '|')),
  assetTypeOptions: FEATURE_TYPES,

  investmentTypes: INVESTMENT_TYPES.join('|'),
  investmentTypesArray: computed('investmentTypes', arrayify('investmentTypes', '|')),
  investmentTypeOptions: INVESTMENT_TYPES,
  investmentStatuses: 'Completed',
  investmentStatusesArray: computed('investmentStatuses', arrayify('investmentStatuses', '|')),
  investmentStatusesOptions: INVESTMENT_STATUSES,

  investmentSources: INVESTMENT_SOURCES.join('|'),
  investmentSourcesArray: computed('investmentSources', arrayify('investmentSources', '|')),
  investmentSourcesOptions: INVESTMENT_SOURCES,

  isPlottingPoint: false,
  newPointLatitude: SOUTHWICK_LATITUDE,
  newPointLongitude: SOUTHWICK_LONGITUDE,
  visibleFeatures: computed(...FEATURE_PARAMS, 'city.places',
    applyFiltersTo('city.places', FEATURE_FILTERS_CONFIG)),

  visibleInvestments: computed(...INVESTMENT_PARAMS, 'city.investments',
    applyFiltersTo('city.investments', INVESTMENT_FILTERS_CONFIG)),

  visibleParcels: computed(...PARCEL_PARAMS, 'city.parcels',
    applyFiltersTo('city.parcels', PARCEL_FILTERS_CONFIG)),
});
