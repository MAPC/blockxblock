import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'cities/city/edit-investment',
  currentCity: Ember.inject.service(),
  model(params) {
    let city = this.modelFor('cities.city');
    let currentCity = this.get('currentCity');

    return this.store.createRecord('investment', {
      city: city.city
    });
  },

  setupController(controller, model){ 
    this._super(controller, model);
    controller.set('currentCity', Ember.inject.service('currentCity'));
  },
  
  actions: {
    didTransition() {
      let currentCity = this.get('currentCity');
      currentCity.set('isPlottingPoint', true);
    },
    willTransition(transition) {
      let currentCity = this.get('currentCity');
      currentCity.set('isPlottingPoint', false);
    },
    submitRoute(object) {
      let currentCity = this.get('currentCity');
      
      object.setProperties({
        latitude: currentCity.get('newPointLatitude'),
        longitude: currentCity.get('newPointLongitude')
      });
      
      return object.save().then((model)=> {
        this.transitionTo('cities.city.investments', model);
      });
    }
  }
});
