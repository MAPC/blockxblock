import Ember from 'ember';
import DS from 'ember-data';

const { alias } = Ember.computed;

export default DS.Model.extend({
  // new attributes
  investment_id: DS.attr('string'),
  investment_descriptor: DS.attr('string'),
  street_address: DS.attr('string'),
  location_description: DS.attr('string'),
  in_district: DS.attr('boolean'),
  source_type: DS.attr('string'),
  tdi_product: DS.attr('string'),
  massdev_product: DS.attr('string'),
  public_product: DS.attr('string'),
  private_product: DS.attr('string'),
  use_type: DS.attr('string'),
  tdi_influence: DS.attr('boolean'),
  investment_status: DS.attr('string'),
  investment_status_start: DS.attr('date'),
  completion_date_is_exact: DS.attr('boolean'),
  prior_investment_status: DS.attr('string'),
  prior_investment_status_start: DS.attr('date'),
  amount_is_public: DS.attr('boolean'),
  amount_is_exact: DS.attr('boolean'),
  exact_amount: DS.attr('number'),
  estimated_amount: DS.attr('number'),
  contact_type: DS.attr('string'),
  inv_contact_name: DS.attr('string'),
  inv_contact_role: DS.attr('string'),
  inv_contact_org: DS.attr('string'),
  inv_contact_phone: DS.attr('string'),
  inv_contact_email: DS.attr('string'),
  inv_contact_website: DS.attr('string'),
  project_name: DS.attr('string'),
  total_project_amount: DS.attr('number'),
  notes: DS.attr('string'),
  file_upload: DS.attr('string'),
  link_description: DS.attr('string'),
  link_url: DS.attr('string'),
  internal_notes: DS.attr('string'),
  internal_files: DS.attr('string'),
  splash: DS.attr('string'),
  i2c_text: DS.attr('string'),
  pub_name: DS.attr('string'),
  pub_role: DS.attr('string'),
  pub_organization: DS.attr('string'),
  pub_phone: DS.attr('string'),
  pub_email: DS.attr('string'),
  pub_website: DS.attr('string'),

  // aliases
  investment_type: alias('use_type'),
  relatedInvestments: alias('related_investments'),

  // relationships
  related_investments: DS.hasMany('investment', { inverse: 'relatedInvestment' }),
  relatedInvestment: DS.belongsTo('investment', { inverse: 'related_investments' }),
  feature: DS.hasMany('feature'),
  city: DS.belongsTo("city"),

  // local session state
  isSelected: false,
});

// form options/categories
export const INVESTMENT_TYPES = ['Infrastructure', 'Finance', 'Planning or Strategy', 'Placemaking', 'Small Business Growth'];
export const INVESTMENT_STATUSES = ['Proposed', 'In Progress', 'Completed'];
export const INVESTMENT_SOURCES = ['MassDevelopment', 'Public', 'Private', 'TDI'];

// filtering DSL
export const INVESTMENT_FILTERS_CONFIG = 
[
  {
    property: 'investment_type',
    filter: 'investmentTypesArray',
    filterType: 'isAny'
  }, 
  {
    property: 'investment_status',
    filter: 'investmentStatusesArray',
    filterType: 'isAny'
  }, 
  {
    property: 'source_type',
    filter: 'investmentSourcesArray',
    filterType: 'isAny'
  }, 
  {
    property: 'estimated_amount',
    filter: ['valueMin', 'valueMax'],
    filterType: 'isWithin'
  }, 
  {
    property: 'tdi_influence',
    filter: 'tdi_influence',
    filterType: 'isTrue'
  },
];
