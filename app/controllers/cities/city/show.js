import Ember from 'ember';


import computed from 'ember-computed';
import applyFiltersTo, { getFilter } from '../../../utils/apply-filter-to';
import arrayify from '../../../utils/arrayify';

import {  FEATURE_TYPES,
          FEATURE_FILTERS_CONFIG } from '../../../models/place';

import {  INVESTMENT_TYPES,
          INVESTMENT_STATUSES,
          INVESTMENT_SOURCES,
          INVESTMENT_FILTERS_CONFIG } from '../../../models/investment';

import {  PARCEL_PARAMS,
          PARCEL_TYPES,
          PARCEL_FILTERS_CONFIG,
          PARCEL_MAP_CONFIG,
          PARCEL_OWNERSHIP_TYPES,
          GFVACANCY_STATUSES,
          UFVACANCY_STATUSES  } from '../../../models/parcel';

const { alias } = Ember.computed;

const INVESTMENT_PARAMS = ['is_tdi_influenced', 'investmentTypes', 'valueMin', 'valueMax', 'investmentStatuses', 'investmentSources', 'investments_fake_open_or_closed'];
const FEATURE_PARAMS = ['assetTypes', 'activating', 'featureOpen', 'employer', 'fake_open_or_closed', 'is_employer', 'is_street_activating', 'is_tdi_asset', 'is_feature_owner_engaged', 'is_collision_point'];


export default Ember.Controller.extend({
  queryParams: ['showPlaces','showInvestments','showParcels'],

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
  landuseTypes: '',
  landuseTypesArray: computed('landuseTypes', arrayify('landuseTypes', '|')),
  landuseTypeOptions: PARCEL_TYPES,

  showInvestments: alias('currentCity.showInvestments'),
  showPlaces: alias('currentCity.showFeatures'),
  showParcels: alias('currentCity.showParcels'),

  isPlottingPoint: false,

  visibleFeatures: computed(...FEATURE_PARAMS, 'investmentIcons', 'city.places', 
    applyFiltersTo('city.places', FEATURE_FILTERS_CONFIG)),

  visibleInvestments: computed(...INVESTMENT_PARAMS, 'city.investments', 
    applyFiltersTo('city.investments', INVESTMENT_FILTERS_CONFIG)),

  visibleParcels: computed(...PARCEL_PARAMS, 'city.parcels', 
    applyFiltersTo('city.parcels', PARCEL_FILTERS_CONFIG)),

  currentCity: Ember.inject.service(),
  session: Ember.inject.service('session'),

});
