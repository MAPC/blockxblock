import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    secret: null,
  },

  currentCity: Ember.inject.service(),
  session: Ember.inject.service(),

  model(params) {
    if (params.secret) {
      this.get('session')
        .authenticate('authenticator:secret', params.secret)
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return this.store.query('city', { exclude: 'investments,parcels,places' });
  },
});
