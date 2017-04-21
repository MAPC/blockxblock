import DS from 'ember-data';
import Ember from 'ember';
import { faker } from 'ember-cli-mirage';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  contact: DS.attr('string'),
  landUseType: DS.attr('string'),
  yearBuilt: DS.attr('date'),
  // forLease: DS.attr('boolean'),
  vacancy: DS.attr('boolean'),
  marked: DS.attr('boolean'),
  // forSale: DS.attr('boolean'),

  forLease: Ember.computed(function() {
    return faker.random.boolean();
  }),
  forSale: Ember.computed(function() {
    return faker.random.boolean();
  }),

  is_engaged_owner: DS.attr('timeline'),
  is_for_sale: DS.attr('timeline'),
  is_for_lease: DS.attr('timeline'),
  is_vacant_lot: DS.attr('timeline'),
  ground_floor_vacancy: DS.attr('timeline'),
  upper_floor_vacancy: DS.attr('timeline'),

  latest_is_engaged_owner: Ember.computed('is_engaged_owner', function() {
    let timeline = this.get('is_engaged_owner');
    return timeline[timeline.length-1].status;
  }),
  latest_is_for_sale: Ember.computed('is_for_sale', function() {
    let timeline = this.get('is_for_sale');
    return timeline[timeline.length-1].status;
  }),
  latest_is_for_lease: Ember.computed('is_for_lease', function() {
    let timeline = this.get('is_for_lease');
    return timeline[timeline.length-1].status;
  }),
  latest_is_vacant_lot: Ember.computed('is_vacant_lot', function() {
    let timeline = this.get('is_vacant_lot');
    return timeline[timeline.length-1].status;
  }),
  latest_ground_floor_vacancy: Ember.computed('ground_floor_vacancy', function() {
    let timeline = this.get('ground_floor_vacancy');
    return timeline[timeline.length-1].status;
  }),
  latest_upper_floor_vacancy: Ember.computed('upper_floor_vacancy', function() {
    let timeline = this.get('upper_floor_vacancy');
    return timeline[timeline.length-1].status;
  }),

  ownership_type: DS.attr('string'),
  land_use: DS.attr('string'),
  zoning: DS.attr('string'),
  parcel_id: DS.attr('string'),
  own_contact_name: DS.attr('string'),
  own_contact_role: DS.attr('string'),
  own_contact_organization: DS.attr('string'),
  own_contact_phone: DS.attr('string'),
  own_contact_email: DS.attr('string'),
  priv_contact_name: DS.attr('string'),
  priv_contact_organization: DS.attr('string'),
  priv_contact_role: DS.attr('string'),
  priv_contact_phone: DS.attr('string'),
  priv_contact_email: DS.attr('string'),
  priv_contact_website: DS.attr('string'),
  priv_notes: DS.attr('string'),
  pub_notes: DS.attr('string'),
  cta_text: DS.attr('string'),
  cta_contact: DS.attr('string'),
  pub_contact_1: DS.attr('string'),
  pub_contact_org_1: DS.attr('string'),
  pub_contact_role_1: DS.attr('string'),
  pub_contact_phone_1: DS.attr('string'),
  pub_contact_email_1: DS.attr('string'),
  pub_contact_website_1: DS.attr('string'),
  pub_contact_2: DS.attr('string'),
  pub_contact_org_2: DS.attr('string'),
  pub_contact_role_2: DS.attr('string'),
  pub_contact_phone_2: DS.attr('string'),
  pub_contact_email_2: DS.attr('string'),
  pub_contact_website_2: DS.attr('string'),

  splash: Ember.computed('latitude,longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude','longitude');
    return `https://maps.googleapis.com/maps/api/streetview?size=450x450&location=${latitude},${longitude}&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps`;
  }),
  geom: DS.attr(),
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
    let computed_properties = ['forLease', 'forSale', 'vacancy'];
    let choroplethKeys = PARCEL_MAP_CONFIG.mapBy('colorMap')
                                          .invoke('mapBy','key')
                                          .reduce(  function(a, b) {
                                            return a.concat(b);
                                          },[])
                                          .uniq();


    let properties = choroplethKeys.concat(computed_properties);

    geojson.set('properties', this.getProperties(properties));
    geojson.set('type', 'Feature');
    geojson.set('geometry', JSON.parse(this.get('geom')));

    return geojson;
  }),
  city: DS.belongsTo('city'),

  isSelected: false
});

export const PARCEL_PARAMS = ['landuseTypes','GFVacancyStatuses','UFVacancyStatuses','OwnershipTypes','groundFloorVacancyMin','groundFloorVacancyMax','landuseTypes','forSale','forLease','yearBuiltMin','yearBuiltMax','isEngagedOwner'];
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
export const PARCEL_MAP_CONFIG = [
  {
    setName: 'Available Spaces',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'latest_is_for_sale',
        value: true,
        color: '#FCBE78'
      },
      {
        key: 'latest_is_for_lease',
        value: true,
        color: '#58BC70'
      }
    ]
  },
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
    setName: 'Ownership Type',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'ownership_type',
        value: 'Partner-controlled',
        color: '#3B158B'
      },
      {
        key: 'ownership_type',
        value: 'Privately Owned',
        color: '#9892BF'
      },
      {
        key: 'ownership_type',
        value: 'Publicly Owned',
        color: '#BB5195'
      }
    ]
  },
  {
    setName: 'Ground Floor Vacancy',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'latest_ground_floor_vacancy',
        value: "Is Vacant Lot",
        color: '#0074ff'
      },
      {
        key: 'latest_ground_floor_vacancy',
        value: "Entirely Vacant",
        color: '#001f4a'
      },
      {
        key: 'latest_ground_floor_vacancy',
        value: "Partially Vacant",
        color: '#808fa4'
      },
      {
        key: 'latest_ground_floor_vacancy',
        value: "Not Vacant",
        color: '#bfc7d2'
      }
    ]
  },
  {
    setName: 'Upper Level Vacancy',
    default_color: 'lightgray',
    colorMap: [
      {
        key: 'latest_upper_floor_vacancy',
        value: 'Entirely Vacant',
        color: '#a33800'
      },
      {
        key: 'latest_upper_floor_vacancy',
        value: 'Partially Vacant',
        color: '#d19b80'
      },
      {
        key: 'latest_upper_floor_vacancy',
        value: 'Not Vacant',
        color: '#e8cdbf'
      }
    ]
  }
];

export const PARCEL_OWNERSHIP_TYPES = PARCEL_MAP_CONFIG.findBy('setName', 'Ownership Type')
                                                       .colorMap
                                                       .mapBy('value');


export const PARCEL_TYPES = PARCEL_MAP_CONFIG.findBy('setName', 'Land Use')
                                             .colorMap
                                             .mapBy('value');

export const GFVACANCY_STATUSES = PARCEL_MAP_CONFIG.findBy('setName', 'Ground Floor Vacancy')
                                                   .colorMap
                                                   .mapBy('value');

export const UFVACANCY_STATUSES = PARCEL_MAP_CONFIG.findBy('setName', 'Upper Level Vacancy')
                                                   .colorMap
                                                   .mapBy('value');
