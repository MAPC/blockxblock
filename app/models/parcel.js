import DS from 'ember-data';
import Ember from 'ember';

const { alias } = Ember.computed;

export default DS.Model.extend({
  // new attributes
  parcel_id: DS.attr('string'),
  street_address: DS.attr('string'),
  property_for_sale: DS.attr('boolean'),
  for_sale_change_date: DS.attr('date'),
  propery_for_lease: DS.attr('boolean'),
  for_lease_change_date: DS.attr('date'),
  listing_type: DS.attr('string'),
  invitation_to_connect: DS.attr('boolean'),
  invitation_to_connect_text: DS.attr('string'),
  realestate_contact_name: DS.attr('string'),
  realestate_contact_role: DS.attr('string'),
  realestate_contact_organization: DS.attr('string'),
  realestate_contact_phone: DS.attr('number'),
  realestate_contact_email: DS.attr('string'),
  realestate_contact_website: DS.attr('string'),
  year_built: DS.attr('number'),
  land_use: DS.attr('string'),
  ground_floor_vacancy_status: DS.attr('string'),
  ground_floor_vacancy_change_date: DS.attr('date'),
  upper_floor_vacancy_status: DS.attr('string'),
  upper_floor_vacancy_change_date: DS.attr('date'),
  assessed_value: DS.attr('number'),
  date_trackchange_value: DS.attr('date'),
  site_control: DS.attr('string'),
  control_change_date: DS.attr('date'),
  engaged_owner: DS.attr('boolean'),
  date_engagedowner_change: DS.attr('date'),
  owner_contact_name: DS.attr('string'),
  owner_contact_role: DS.attr('string'),
  owner_contact_org: DS.attr('string'),
  owner_contact_phone: DS.attr('number'),
  owner_contact_email: DS.attr('string'),
  owner_contact_website: DS.attr('string'),
  parcel_notes: DS.attr('string'),
  media_upload: DS.attr('string'),
  parcel_link1: DS.attr('string'),
  parcel_link1_description: DS.attr('string'),
  parcel_link2: DS.attr('string'),
  parcel_link2_description: DS.attr('string'),
  internal_parcel_notes: DS.attr('string'),
  internal_parcel_media: DS.attr('file'),
  featured_parcel_photo: DS.attr('string'),
  message_to_connect: DS.attr('string'),
  parcel_contact_name: DS.attr('string'),
  parcel_contact_role: DS.attr('string'),
  parcel_contact_org: DS.attr('string'),
  parcel_contact_email: DS.attr('string'),
  parcel_contact_phone: DS.attr('number'),
  parcel_contact_website: DS.attr('string'),
  geom: DS.attr(),

  // aliases
  is_engaged_owner: alias('engaged_owner'),

  // computeds
  splash: Ember.computed('latitude,longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude','longitude');
    return `https://maps.googleapis.com/maps/api/streetview?size=450x300&location=${latitude},${longitude}&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps`;
  }),
  latitude: Ember.computed('geojson', function() {
    let geojson=this.get('geojson');
    return L.geoJSON(geojson).getBounds().getCenter().lat;
  }),
  longitude: Ember.computed('geojson', function() {
    let geojson=this.get('geojson');
    return L.geoJSON(geojson).getBounds().getCenter().lng;
  }),
  geojson: Ember.computed('geom', function() {
    let geojson = Ember.Object.create();
    geojson.set('type', 'Feature');
    geojson.set('geometry', this.get('geom.geometry'));

    return geojson;
  }),
  city: DS.belongsTo('city'),

  isSelected: false
});

// filter params
export const PARCEL_PARAMS = ['landuseTypes','GFVacancyStatuses','UFVacancyStatuses','OwnershipTypes','groundFloorVacancyMin','groundFloorVacancyMax','landuseTypes','forSale','forLease','yearBuiltMin','yearBuiltMax','isEngagedOwner'];

// dsl for filters
export const PARCEL_FILTERS_CONFIG = [
  { 
    property: 'land_use',
    filter: 'landuseTypesArray',
    filterType: 'isAny'
  },
  { 
    property: 'latest_ground_floor_vacancy',
    filter: 'GFVacancyStatusesArray',
    filterType: 'isAny'
  },
  { 
    property: 'latest_upper_floor_vacancy',
    filter: 'UFVacancyStatusesArray',
    filterType: 'isAny'
  },
  { 
    property: 'ownership_type',
    filter: 'OwnershipTypesArray',
    filterType: 'isAny'
  },
  { 
    property: 'latest_is_for_sale',
    filter: 'forSale',
    filterType: 'isTrue'
  },
  { 
    property: 'latest_is_engaged_owner',
    filter: 'isEngagedOwner',
    filterType: 'isTrue'
  },
  { 
    property: 'latest_is_for_lease',
    filter: 'forLease',
    filterType: 'isTrue'
  },
  { 
    property: 'yearBuilt',
    filter: ['yearBuiltMin', 'yearBuiltMax'],
    filterType: 'isWithin'
  }
];

// choropleth config
export const PARCEL_MAP_CONFIG = [
  {
    setName: 'Land Use',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'land_use',
        value: 'Residential',
        color: '#FFC800'
      },
      {
        key: 'land_use',
        value: 'Commercial',
        color: '#B40028'
      },
      {
        key: 'land_use',
        value: 'Industrial',
        color: '#A42E9F'
      }
    ]
  },
];

export const PARCEL_OWNERSHIP_TYPES = 
  PARCEL_MAP_CONFIG.findBy('setName', 'Ownership Type');

export const PARCEL_TYPES = 
  PARCEL_MAP_CONFIG.findBy('setName', 'Land Use');

export const GFVACANCY_STATUSES = 
  PARCEL_MAP_CONFIG.findBy('setName', 'Ground Floor Vacancy');

export const UFVACANCY_STATUSES = 
  PARCEL_MAP_CONFIG.findBy('setName', 'Upper Level Vacancy');
