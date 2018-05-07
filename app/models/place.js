import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

const { alias } = Ember.computed;

export default DS.Model.extend({

  name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  location_type: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),
  is_in_district: DS.attr('boolean'),
  type: DS.attr('string'),
  subtype: DS.attr('string'),
  status: DS.attr('timeline'),
  employment: DS.attr('timeline'),
  activating: DS.attr('timeline'),
  community_hub: DS.attr('timeline'),
  tdi_asset: DS.attr('timeline'),
  tdi_asset_start: DS.attr('date'),
  engaged_owner: DS.attr('timeline'),
  engaged_owner_start: DS.attr('date'),
  owner_name: DS.attr('string'),
  owner_title: DS.attr('string'),
  owner_org: DS.attr('string'),
  owner_phone: DS.attr('string'),
  owner_email: DS.attr('string'),
  owner_website: DS.attr('string'),
  notes: DS.attr('string'),
  file_upload: DS.attr('string'),
  link_description: DS.attr('string'),
  link_url: DS.attr('string'),
  internal_notes: DS.attr('string'),
  internal_files: DS.attr('string'),
  i2c_text: DS.attr('string'),
  pub_name: DS.attr('string'),
  pub_role: DS.attr('string'),
  pub_organization: DS.attr('string'),
  pub_phone: DS.attr('string'),
  pub_email: DS.attr('string'),
  pub_website: DS.attr('string'),
  related_places: DS.attr('string'),
  related_places_text: DS.attr('string'),
  related_investments_text: DS.attr('string'),

  // aliases
  feature_name: alias('name'),
  assetType: alias('type'),
  feature_type: alias('type'),

  // computeds
  is_employer: Ember.computed('employment', function() {
    return this.get('employment.firstObject.value');
  }),
  is_activating: Ember.computed('activating', function() {
    return this.get('activating.firstObject.value') == true;
  }),
  is_tdiasset: Ember.computed('tdi_asset', function() {
    return this.get('tdi_asset.firstObject.value') == true;
  }),
  is_engaged: Ember.computed('engaged_owner', function() {
    return this.get('engaged_owner.firstObject.value') == true;
  }),
  engaged_from: Ember.computed('engaged_owner', function() {
    if (this.get('engaged_owner.firstObject.value') == true){
      return this.get('engaged_owner.firstObject.date');
    } else {
      return '';
    }
  }),
  more_info_link_url: Ember.computed('link_url', function() {
    return this.get('link_url');
  }),
  more_info_link_desc: Ember.computed('link_description', function() {
    return this.get('link_description');
  }),
  is_community_hub: Ember.computed('community_hub', function() {
    return this.get('community_hub.firstObject.value') == true;
  }),
  open_on: Ember.computed('status', function() {
    if (this.get('status.firstObject.value') == 'Open'){
      return this.get('status.firstObject.date');
    } else if (this.get('status.secondObject.value') == 'Open'){
      return this.get('status.secondObject.date');
    }
  }),
  close_on: Ember.computed('status', function() {
    if (this.get('status.firstObject.value') == 'Closed'){
      return this.get('status.firstObject.date');
    } else if (this.get('status.secondObject.value') == 'Closed'){
      return this.get('status.secondObject.date');
    }
  }),
  // this.get('city.latitude')
  iconUrl: Ember.computed('feature_type', function() {
    let featureType = this.get('feature_type').dasherize().replace('/', '');
    return `${config.prepend ? config.prepend : '/'}images/icons/features/${featureType}.png`;
  }),
  iconWatermarkUrl: Ember.computed('feature_type', function() {
    let featureType = this.get('feature_type').dasherize().replace('/', '');
    return `${config.prepend ? config.prepend : '/'}images/icons/features/filters/${featureType}.png`;
  }),
  investmentAmount: Ember.computed('investments.[]', function(){
    let investments_rel = this.get('investments').mapBy('estimated_amount');
    let amount_t = 0;
    investments_rel.forEach(function(ea){
      if (ea){
        amount_t = amount_t + ea
      }
    })
    return amount_t;
  }),
  splash: Ember.computed('latitude,longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude', 'longitude');
    let featured_photo = this.get('featured_photo');
    return featured_photo || `https://maps.googleapis.com/maps/api/streetview?size=450x300&location=${latitude},${longitude}&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps`;
  }),

  // relationships
  city: DS.belongsTo("city"),
  relatedPlaces: DS.hasMany('place', { inverse: 'relatedPlace' }),
  relatedFeature: DS.belongsTo('place', { inverse: 'relatedPlaces' }),
  relatedFeaturesDescription: DS.attr('string'),
  investments: DS.hasMany('investment'),
  relatedInvestmentsDescription: DS.attr('string'),

  // local state
  isSelected: false
});

// form / filter types
export const FEATURE_TYPES = ["Arts and Culture","Civic Institution","Education","Food Sales","Health Care","Office","Open Space","Parking","Public Transit","Housing","Retail","Temporary","Mixed-Use Development"];
export const FEATURE_SUBTYPES = {
  "Food Sales": [
    "Coffee Shop",
    "Bar",
    "Specialty Food Sales",
    "Sit-down Restaurant",
    "Counter Service Restaurant",
    "Fast-Food Chain",
    "Grocery Store",
    "Farmer's Market",
    "Restaurant Incubator",
    "Regular Food Truck Hub"
  ],
  "Office": [
    "General Office",
    "Corporation Headquarters",
    "Coworking Space"
  ],
  "Retail": [
    "Convenience / Corner Store",
    "Specialty Retailer",
    "Department Store",
    "Discount Retailer",
    "Resale/Consignment",
    "Specialty Services",
    "Big Box Store",
    "Pharmacy",
    "Bank",
    "Indoor Recreation",
    "Automotive",
    "General Retail"
  ],
  "Community": ["Non-Profit",
    "Groups or Associations",
    "Church",
    "Coworking Space"
  ],
  "Arts and Culture": [
    "Performance Theatre",
    "Music Venue",
    "Movie Theatre",
    "Museum/Gallery",
    "Art Center/Production Space",
    "Community Gathering Space"
  ],
  "Health Care": [
    "Specialty Health Services",
    "Medical Office",
    "Walk-in Clinic",
    "Hospital"
  ],
  "Education": [
    "Pre-School or Early Education Center",
    "Public School",
    "Private School",
    "Vocational School",
    "College or University",
    "Supplemental Services"
  ],
  "Civic Institution": [
    "Fire Department",
    "Library",
    "Police Department",
    "City Government",
    "Social Services",
    "Public Agency",
    "Community Group",
    "Post Office",
    "Court"
  ],
  "Temporary": [
    "Retail",
    "Food Sales",
    "Workspace",
    "Event Location",
    "Park/Parklet",
    "Streetscape Improvements",
    "Other"
  ],
  "Park / Open Space": [
    "Plaza",
    "Alleyway",
    "Pocket Park",
    "Park",
    "Trails and Greenways",
    "Community Garden / Farm",
    "Active Recreation Facility"
  ],
  "Parking": [
    "Free Lot",
    "Paid Lot",
    "Paid Structure"
  ],
  "Public Transit": [
    "Local/Regional Bus Stop",
    "Light Rail Station",
    "High-Speed Rail Station",
    "Transportation Center"
  ],
  "Housing": [
    "Single Family",
    "2-4 units",
    "2-4 units, subsidized",
    "4-10 units",
    "4-10 units, subsidized",
    "10+ units",
    "10+ units, subsidized",
    "Assisted Living"
  ]
};

// DSL for filter menus
export const FEATURE_FILTERS_CONFIG = [{
  property: 'feature_type',
  filter: 'assetTypesArray',
  filterType: 'isAny'
}, {
  property: 'is_activating',
  filter: 'activating',
  filterType: 'isTrue'
}, {
  property: 'isOpen',
  filter: 'featureOpen',
  filterType: 'isTrue'
}, {
  property: 'is_employer',
  filter: 'is_employer',
  filterType: 'isTrue'
}, {
  property: 'tdi_asset',
  filter: 'tdi_asset',
  filterType: 'isTrue'
}, {
  property: 'engaged_owner',
  filter: 'engaged_owner',
  filterType: 'isTrue'
}, {
  property: 'is_community_hub',
  filter: 'community_hub',
  filterType: 'isTrue'
}];
