import Ember from 'ember';

export default Ember.Route.extend({
  currentCity: Ember.inject.service(),
  model() {
    return this.store.query('city', { exclude: 'investments,parcels,places' });
  }
});
