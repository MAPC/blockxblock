import DS from 'ember-data';
import Ember from 'ember';
import { faker } from 'ember-cli-mirage';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr("string"),
  address: DS.attr("string"),
  contact: DS.attr("string"),
  employer: DS.attr("boolean"),
  activating: DS.attr("boolean"),
  assetType: DS.attr("string"),
  subtype: DS.attr("string"),
  comment: DS.attr("string"),
  opendate: DS.attr("date"),
  closedate: DS.attr("date"),
  splash: Ember.computed('latitude,longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude','longitude');
    return `https://maps.googleapis.com/maps/api/streetview?size=450x450&location=${latitude},${longitude}&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps`;
  }),
  isOpen: Ember.computed('closedate', function() {
    let closedate = this.get('closedate');
    if (!closedate) return true;
    return false;
  }),
  
  fake_open_or_closed: Ember.computed(function() {
    let number = 5;
    let array = [];

    for(var count=0; count < number; count++) {
      array.push({  status: faker.list.cycle( "open", "closed")(count),  
                    quarter: faker.date.past() });
    }

    return array;
  }),
  datesOpen: Ember.computed('fake_open_or_closed.@each', function() {
    let structured = this.get('fake_open_or_closed')
                .filter((obj) => { return obj.status == 'open'; })
                .map((el) => { 
                  let normalizedMonth = new Date();
                  normalizedMonth.setFullYear(el.quarter.getFullYear(),el.quarter.getMonth(),1);
                  return { date: normalizedMonth, type: 'feature' };
                });

    return structured;
  }),

  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  is_addressy: DS.attr('boolean', { defaultValue: true }),
  non_addressy_location: DS.attr('string'),
  is_employer: DS.attr('boolean'),
  is_street_activating: DS.attr('boolean'),
  is_tdi_assett: DS.attr('boolean'),
  open_or_closed: DS.attr(),
  featured_photo: DS.attr('string'),
  pub_docs: DS.attr('string'),
  priv_docs: DS.attr('string'),
  related_link_title: DS.attr('string'),
  related_link_url: DS.attr('string'),
  relation_notes: DS.attr('string'),
  is_feature_owner_engaged: DS.attr('boolean'),
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
  is_collision_point: DS.attr('boolean'),

  city: DS.belongsTo("city"),

  relatedFeatures: DS.hasMany('feature', { inverse: 'relatedFeature' }),
  relatedFeature: DS.belongsTo('feature', { inverse: 'relatedFeatures' }),
  relatedFeaturesDescription: DS.attr('string'),
  
  investments: DS.hasMany('investment'),
  relatedInvestmentsDescription: DS.attr('string'),

  isSelected: false
});

export const FEATURE_PARAMS = ['assetTypes', 'activating', 'featureOpen', 'employer','fake_open_or_closed'];
export const FEATURE_TYPES  = ['Food','Business','Retail','Community','Cultural & Entertainment','Health Care','Government','Temporary','Park / Open Space','Parking','Public Transit'];
export const FEATURE_FILTERS_CONFIG = [
      { 
        property: 'assetType',
        filter: 'assetTypesArray',
        filterType: 'isAny'
      },
      { 
        property: 'activating',
        filter: 'activating',
        filterType: 'isTrue'
      },
      {
        property: 'isOpen',
        filter: 'featureOpen',
        filterType: 'isTrue'
      },
      {
        property: 'employer',
        filter: 'employer',
        filterType: 'isTrue'
      },
      {
        property: 'fake_open_or_closed',
        filter: 'fake_open_or_closed',
        filterType: 'isLongitudinal'
      }
    ];

export const FEATURE_SUBTYPES = {"Food":
    ["Cafe",
      "Restaurant",
      "Fast-Food",
      "Grocery Store",
      "Market"],
    "Business" :
    ["General Office",
      "General Industrial",
      "Bank",
      "Corporation Headquarters"],
    "Retail" :
    ["Convenience",
      "Pharmacy",
      "Household Goods",
      "Services",
      "Big Box Store",
      "Other Retail"],
    "Community":
    ["Non-Profit",
      "Groups or Associations",
      "Church",
      "Coworking Space"],
    "Cultural & Entertainment" :
    ["Theatre",
      "Indoor Recreation",
      "Outdoor Recreation",
      "Museum",
      "Art Center / Gallery",
      "MakerSpace"],
    "Health Care":
    ["Care and Treatment Facility",
      "Medical Office"],
    "Eductation" :
    ["Pre-School or Early Education Center",
      "Public School",
      "Private School",
      "Vocational School",
      "College or University"],
    "Government" :
      ["Fire Department",
        "Library",
        "Police Department",
        "City Government",
        "Social Services",
        "Other Government Departments and Agencies",
        "Post Office"],
    "Temporary":
    ["Pop-Up",
      "Farmers Market",
      "Event Location"],
    "Park / Open Space":
    ["Plaza",
      "Alleyway",
      "Pocket Park",
      "Trails and Greenways",
      "Community Garden / Farm"],
    "Parking":
    ["Municipal Lot",
      "Paid Lot",
      "Paid Structure"],
    "Public Transit":
    [ "Bus",
      "Rail"]
  }
