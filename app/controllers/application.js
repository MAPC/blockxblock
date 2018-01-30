import Ember from 'ember';

export default Ember.Controller.extend({
  currentCity: Ember.inject.service(),
  isLoggingIn: false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:devise', username, password)
        .then(()=> {
          this.set('isLoggingIn', false);
        })
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
