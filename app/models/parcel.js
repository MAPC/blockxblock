import DS from 'ember-data';
import Ember from 'ember';

const { alias } = Ember.computed;

export default DS.Model.extend({
  // new attributes
  parcel_id: DS.attr('string'),
  street_address: DS.attr('string'),
  property_for_sale: DS.attr('timeline'),
  property_for_lease: DS.attr('timeline'),
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
  ground_floor_vacancy_status: DS.attr('timeline'),
  upper_floor_vacancy_status: DS.attr('timeline'),
  assessed_value: DS.attr('timeline'),
  site_control: DS.attr('timeline'),
  engaged_owner: DS.attr('timeline'),
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
  property_for_sale_latest: Ember.computed('property_for_sale', function() {
    return this.get('property_for_sale.lastObject.value');
  }),
  property_for_lease_latest: Ember.computed('property_for_lease', function() {
    return this.get('property_for_lease.lastObject.value');
  }),
  latitude: Ember.computed('geojson', function() {
    let geojson=this.get('geojson');
    if (geojson.geometry) return L.geoJSON(geojson).getBounds().getCenter().lat;
    return this.get('city.latitude');
  }),
  longitude: Ember.computed('geojson', function() {
    let geojson=this.get('geojson');
    if (geojson.geometry) return L.geoJSON(geojson).getBounds().getCenter().lng;
    return this.get('city.latitude');
  }),
  geojson: Ember.computed('geom', function() {
    let geojson = Ember.Object.create();
    geojson.set('type', 'Feature');
    geojson.set('geometry', this.get('geom.geometry'));
    geojson.set('properties', this.getProperties('land_use', 'property_for_sale_latest', 'property_for_lease_latest'))

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
  // { 
  //   property: 'latest_ground_floor_vacancy',
  //   filter: 'GFVacancyStatusesArray',
  //   filterType: 'isAny'
  // },
  // { 
  //   property: 'latest_upper_floor_vacancy',
  //   filter: 'UFVacancyStatusesArray',
  //   filterType: 'isAny'
  // },
  // { 
  //   property: 'ownership_type',
  //   filter: 'OwnershipTypesArray',
  //   filterType: 'isAny'
  // },
  { 
    property: 'property_for_sale_latest',
    filter: 'forSale',
    filterType: 'isTrue'
  },
  // { 
  //   property: 'latest_is_engaged_owner',
  //   filter: 'isEngagedOwner',
  //   filterType: 'isTrue'
  // },
  { 
    property: 'property_for_lease_latest',
    filter: 'forLease',
    filterType: 'isTrue'
  },
  // { 
  //   property: 'yearBuilt',
  //   filter: ['yearBuiltMin', 'yearBuiltMax'],
  //   filterType: 'isWithin'
  // }
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
  {
    setName: 'Available Spaces',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'property_for_sale_latest',
        value: true,
        color: '#FCBE78'
      },
      {
        key: 'property_for_lease_latest',
        value: true,
        color: '#58BC70'
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
