import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

const { alias } = Ember.computed;

export default DS.Model.extend({
  // new attributes
  place_id: DS.attr('string'),
  name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  location_type: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),
  is_in_district: DS.attr('boolean'),
  type: DS.attr('string'),
  subtype: DS.attr('string'),
  current_status: DS.attr('string'),
  current_status_start: DS.attr('date'),
  prior_status: DS.attr('string'),
  prior_status_start: DS.attr('date'),
  employment: DS.attr('string'),
  employment_start: DS.attr('date'),
  activating: DS.attr('boolean'),
  activating_start: DS.attr('date'),
  community_hub: DS.attr('boolean'),
  community_hub_start: DS.attr('date'),
  tdi_asset: DS.attr('boolean'),
  tdi_asset_start: DS.attr('date'),
  engaged_owner: DS.attr('boolean'),
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
  iconUrl: Ember.computed('feature_type', function() {
    let featureType = this.get('feature_type').dasherize().replace('/', '');
    return `${config.prepend ? config.prepend : '/'}images/icons/features/${featureType}.png`;
  }),
  iconWatermarkUrl: Ember.computed('feature_type', function() {
    let featureType = this.get('feature_type').dasherize().replace('/', '');
    return `${config.prepend ? config.prepend : '/'}images/icons/features/filters/${featureType}.png`;
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
export const FEATURE_TYPES = ['Arts and Culture', 'Civic Institution', 'Community Hub', 'Community', 'Education', 'Food Sales', 'Health Care', 'Housing', 'Mixed-Use Development', 'Office', 'Park or Open Space', 'Parking', 'Public Transit', 'Retail', 'Temporary'];
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
  property: 'activating',
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
  property: 'is_street_activating',
  filter: 'is_street_activating',
  filterType: 'isTrue'
}, {
  property: 'is_tdi_asset',
  filter: 'is_tdi_asset',
  filterType: 'isTrue'
}, {
  property: 'is_feature_owner_engaged',
  filter: 'is_feature_owner_engaged',
  filterType: 'isTrue'
}, {
  property: 'is_collision_point',
  filter: 'is_collision_point',
  filterType: 'isTrue'
}, {
  property: 'employer',
  filter: 'employer',
  filterType: 'isTrue'
}, {
  property: 'fake_open_or_closed',
  filter: 'fake_open_or_closed',
  filterType: 'isLongitudinal'
}];
