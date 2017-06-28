import Ember from 'ember';

export default Ember.Component.extend({
  lat: 42,
  lng: -71.922,
  zoom: 9,
  actions: {
    linkTo(route, model) {
      this.transitionTo(route, model);
    }
  }
});
