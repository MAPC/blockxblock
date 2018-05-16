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
            include: 'status,latitude,longitude,type,subtype,description,city,investments,employment,activating,community_hub,name,location_type'
          }
        ),
      investments: this.store.query(
          'investment',
          {
            city: city.get('name'),
            include: 'id,record_url,investment_id,source_type,place_id,city,use_type,investment_status,estimated_amount,investment_descriptor,tdi_influence'
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

    /*
     * Find places that have identical lat/lng
     */
    const locations = {};
    const radius = .00005;

    model.places.forEach(place => {
      const location = `${place.get('latitude')}-${place.get('longitude')}`;
      locations[location] = locations[location] || [];
      locations[location].push(place);
    });

    // Displace these locations by a small amount so they don't entirely overlap
    Object.values(locations)
      .filter(location => location.length > 1)
      .forEach(location => {
        location.forEach((place, i) => {
          const radian = i * (Math.PI / ((location.length - 1) / 2));
          const adjustedLat = place.get('latitude') + (Math.sin(radian) * radius);
          const adjustedLng = place.get('longitude') + (Math.cos(radian) * radius);
          
          place.set('latitude', adjustedLat);
          place.set('longitude', adjustedLng);
        });
      });

    let currentCity = this.get('currentCity');
    currentCity.setCity(model.city);
    currentCity.setAllInvestments(model.investments)
  }
});
