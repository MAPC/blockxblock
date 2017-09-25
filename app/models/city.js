import DS from 'ember-data';
import Ember from 'ember';

const { alias } = Ember.computed;

export default DS.Model.extend({
  city_name: DS.attr('string'),
  name: alias('city_name'),
  imageOverlay: alias('imageoverlay'),
  imageoverlay: DS.attr('string'),
  imageoverlaybbox: DS.attr('timeline'),
  imageOverlayBBox: alias('imageoverlaybbox'),
  splash: alias('splash_image'),
  splash_image: DS.attr('string'),

  latitude: DS.attr('number'),
  longitude: DS.attr('number'),

  cta_text: DS.attr('string'),
  cta_contact: DS.attr('string'),
  cta_contact_org: DS.attr('string'),
  cta_contact_role: DS.attr('string'),
  cta_contact_phone: DS.attr('string'),
  cta_contact_email: DS.attr('string'),
  feature_cta_default: DS.attr('string'),
  investment_cta_default: DS.attr('string'),
  parcel_cta_default: DS.attr('string'),

  places: DS.hasMany('place', { async: false }),
  fellows: DS.attr('boolean'),
  parcels: DS.hasMany('parcel'),
  investments: DS.hasMany('investment'),
});
