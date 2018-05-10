import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Component.extend({

  currentCity: Ember.inject.service(),

  is_employer: alias('model.is_employer'),
  isActivating: alias('model.is_activating'),
  isContributing: alias('model.is_tdiasset'),
  isEngaged: alias('model.is_engaged'),
  engagedFrom: alias('model.engaged_from'),
  moreInfoLinkUrl: alias('model.more_info_link_url'),
  moreInfoLinkDesc: alias('model.more_info_link_desc'),
  contactName: alias('model.owner_name'),
  contactTitle: alias('model.owner_title'),
  notes: alias('model.notes'),
  ownerPhone: alias('model.owner_phone'),
  ownerEmail: alias('model.owner_email'),
  relDocument: alias('model.file_upload'),
  streetAddress: alias('model.address'),
  nonAddressyLocation: alias('model.non_addressy_location'),
  investmentsRel: alias('model.investmentAmount'),
  featureStart: alias('model.tdi_asset_start'),
  featureType: alias('model.type'),
  featureSubType: alias('model.subtype'),
  open_on: alias('model.open_on'),
  close_on: alias('model.close_on'),

  totalInvestments: Ember.computed('currentCity', function() {
    let m = this.get('model')

    return 0;
  }),

  didInsertElement() {
    Ember.run.schedule('afterRender', this, function(){
      this.$('.ui.accordion').accordion();
    });
  },

});
