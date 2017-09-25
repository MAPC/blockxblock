import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cities', function() {
    this.route('city', { path: '/:city_id' }, function() {
      this.route('city-filters', { path: '/show' });

      this.route('places', { path: '/places/:place_id' });
      this.route('edit-place', { path: '/places/:place_id/edit'});

      this.route('parcels', { path: '/parcels/:parcel_id' });
      this.route('edit-parcel', { path: '/parcels/:parcel_id/edit' });

      this.route('investments', { path: '/investments/:investment_id' });
      this.route('edit-investment', { path: '/investments/:investment_id/edit' });
      // just have details view cover filters/list with CSS (position: absolute; left: 0;)

      this.route('new-place', { path: '/places/new' });
      this.route('new-investment', { path: '/investments/new' });

      // for edit, just have a component with an init that creates the map point through the service
      this.route('add-data', { path: 'add' });
    });
  });
  this.route('login');
});

export default Router;
