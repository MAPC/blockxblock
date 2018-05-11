import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from 'blockxblock/config/environment';


export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    console.log('Restore', data);
  },

  authenticate(secret) {
    return this.get('ajax').request('/', { 
      host: config.secretService, 
      data: { secret },
    });
  },

  invalidate(data) {
    console.log('Invalidate', data);
  }
});
