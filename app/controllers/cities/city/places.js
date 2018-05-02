import Ember from 'ember';

export default Ember.Controller.extend({
    currentCity: Ember.inject.service(),

    totalInvestments: Ember.computed('currentCity', function() {
      let m = this.get('model')

      return 0;
    }),
});
