import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  currentCity: Ember.inject.service(),
  model(params) {
    let cities = this.modelFor('cities');
    let city = cities.findBy('id', params.city_id);

    return RSVP.hash({
      city,
      places: this.store.query(
          'place',
          {
            city: city.get('name'),
            include: 'latitude,longitude,type,subtype,description,city,investments,employment,activating,community_hub,name,location_type'
          }
        ),
      investments: this.store.query(
          'investment',
          {
            city: city.get('name'),
            include: 'id,record_url,investment_id,source_type,place_id,city,use_type,investment_status,estimated_amount,investment_descriptor'
          }
        ),
      parcels: this.store.query(
        'parcel',
        {
          city: city.get('name'),
          include: 'parcel_id,street_address,year_built,land_use,city,property_for_lease,property_for_sale'
        }
      ),
    });
  },

  afterModel(model) {
    let currentCity = this.get('currentCity');
    currentCity.setCity(model.city);
    currentCity.setAllInvestments(model.investments)
  }
});
