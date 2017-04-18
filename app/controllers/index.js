import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    linkTo(route, model) {
      this.transitionToRoute(route, model);
    }
  }
});
