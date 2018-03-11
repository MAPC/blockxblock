import Ember from 'ember';

export default Ember.Mixin.create({
  currentCity: Ember.inject.service(),
  positionMap() {
    let currentCity = this.get('currentCity');
    let model = this.modelFor(this.routeName);
    let latitude = model.get('latitude');
    let longitude = model.get('longitude');

    model.set('isSelected', true);
    Ember.run.next(this, () => {
      currentCity.setProperties({
        latitude,
        longitude,
      });
    });
  },
  actions: {
    didTransition() { 
      this.positionMap();
      return this._super();
    },
    willTransition() {
      let model = this.modelFor(this.routeName);
      model.set('isSelected', false);
      return this._super();
    }
  }
});
