import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr("string"),
  address: DS.attr("string"),
  contact: DS.attr("string"),
  employer: DS.attr("string"),
  activating: DS.attr("string"),
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  value: DS.attr("number"),
  type: DS.attr("string"),

  project: DS.attr('string'),
  is_addressy: DS.attr('boolean'),
  non_addressy_location: DS.attr('string'),
  source_type: DS.attr('string'),
  is_tdi_influenced: DS.attr('boolean'),
  investment_type: DS.attr('string'),
  product_massdev: DS.attr('string'),
  product_public: DS.attr('string'),
  product_private: DS.attr('string'),
  is_amount_known: DS.attr('boolean'),
  is_amount_estimated: DS.attr('boolean'),
  is_amount_public: DS.attr('boolean'),
  amount_exact: DS.attr('number'),
  amount_estimated: DS.attr('string'),
  investment_status: DS.attr(),
  investment_status_latest: Ember.computed('investment_status', function() {
    let investment_status = this.get('investment_status');
    if (investment_status) {
      investment_status = JSON.parse(investment_status);  
      return investment_status.sortBy((el) => { return moment(el.date) } )[investment_status.length - 1].status;
    } else {
      return [];
    } 
  }),
  is_close_date_approx: DS.attr('boolean'),
  featured_photo: DS.attr('string'),
  pub_docs: DS.attr('string'),
  priv_docs: DS.attr('string'),
  related_link_title: DS.attr('string'),
  related_link_url: DS.attr('string'),
  relation_notes: DS.attr('string'),
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
                  return { date: normalizedMonth, type: 'investment' };
                });

    return structured;
  }),

  city: DS.belongsTo("city"),
  isSelected: false
});

export const INVESTMENT_PARAMS = ['investmentTypes', 'valueMin', 'valueMax', 'investmentStatuses', 'investmentSources'];
export const INVESTMENT_TYPES  = ['Infrastructure','Finance','Assistance','Placemaking'];
export const INVESTMENT_STATUSES  = ['Proposed','In Progress','Completed','Failed'];
export const INVESTMENT_SOURCES = ['MassDevelopment','Public','Private'];
export const INVESTMENT_FILTERS_CONFIG = [
      { 
        property: 'investment_type',
        filter: 'investmentTypesArray',
        filterType: 'isAny'
      },
      { 
        property: 'amount_exact',
        filter: ['valueMin', 'valueMax'],
        filterType: 'isWithin'
      },
      {
        property: 'fake_open_or_closed',
        filter: 'fake_open_or_closed',
        filterType: 'isLongitudinal'
      },
      {
        property: 'investment_status_latest',
        filter: 'investmentStatusesArray',
        filterType: 'isAny'
      },
      { 
        property: 'amount_estimated',
        filter: 'investmentSourcesArray',
        filterType: 'isAny'
      }
    ];
