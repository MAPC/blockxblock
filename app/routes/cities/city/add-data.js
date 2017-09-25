import Ember from 'ember';
import { FEATURE_TYPES } from '../../../models/place';

export default Ember.Route.extend({
  currentCity: Ember.inject.service(),
  model(params) {
    let city = this.modelFor('cities.city');
    return this.store.createRecord('place', {
      city: city.city
    });
  },

  setupController(controller, model){ 
    this._super(controller, model);
    controller.set('currentCity', Ember.inject.service('currentCity'));
    controller.set('featureTypes', FEATURE_TYPES);
  },

  actions: {
    associateInvestment(model) {
      model.get('investments').createRecord({});
    },
    didTransition() {
      let currentCity = this.get('currentCity');
      currentCity.set('isPlottingPoint', true);
    },
    willTransition(transition) {
      let currentCity = this.get('currentCity');
      currentCity.set('isPlottingPoint', false)
    },
    submitRoute(object) {
      let currentCity = this.get('currentCity');
      
      object.setProperties({
        latitude: currentCity.get('newPointLatitude'),
        longitude: currentCity.get('newPointLongitude')
      });
      
      return object.save().then((model)=> {
        this.transitionTo('cities.city.places', model);
      });
    }
  }
});
