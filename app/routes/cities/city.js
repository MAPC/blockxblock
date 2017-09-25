import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  currentCity: Ember.inject.service(),
  model(params) {
    let cities = this.modelFor('cities');
    let city = cities.findBy('id', params.city_id);

    return RSVP.hash({
      city,
      places: this.store.query('place', { city: city.get('name') }),
      investments: this.store.query('investment', { city: city.get('name'), exclude: 'related_investments,related_places' }),
      parcels: this.store.query('parcel', { city: city.get('name') }),
    });
  },
  
  afterModel(model) {
    let currentCity = this.get('currentCity');
    currentCity.setCity(model.city);
  }
});
