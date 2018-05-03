import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  currentCity: Ember.inject.service(),

  totalInvestments: Ember.computed('currentCity', function() {
    let m = this.get('model')

    return 0;
  }),
  didInsertElement() {
    Ember.run.schedule('afterRender', this, function(){
      this.$('.ui.accordion').accordion();
    });
  }
});
