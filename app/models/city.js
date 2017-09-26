import DS from 'ember-data';
import Ember from 'ember';

const { alias } = Ember.computed;

export default DS.Model.extend({
  // regular attributes
  city_name: DS.attr('string'),
  district_name: DS.attr('string'),
  program_start_date: DS.attr('date'),
  fellow_status: DS.attr('boolean'),
  fellow_status_start: DS.attr('date'),
  splash_image: DS.attr('string'),
  i2c_text: DS.attr('string'),
  district_contact_name: DS.attr('string'),
  district_contact_role: DS.attr('string'),
  district_contact_org: DS.attr('string'),
  district_contact_phone: DS.attr('string'),
  district_contact_email: DS.attr('string'),
  district_contact_website: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  imageoverlay: DS.attr('string'),
  imageoverlaybbox: DS.attr('timeline'),

  // aliases for name changes
  name: alias('city_name'),
  imageOverlay: alias('imageoverlay'),
  imageOverlayBBox: alias('imageoverlaybbox'),
  splash: alias('splash_image'),

  // relationships
  places: DS.hasMany('place', { async: false }),
  parcels: DS.hasMany('parcel'),
  investments: DS.hasMany('investment'),
});
