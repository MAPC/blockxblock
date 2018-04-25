import Ember from 'ember';

export default Ember.Controller.extend({
    currentCity: Ember.inject.service(),

    totalInvestments: Ember.computed('currentCity', function() {
      let m = this.get('model')

      console.log("asdasdasdasd")
      console.log(m)
      console.log(m.get('investments'))
      return 0;
    }),
});
