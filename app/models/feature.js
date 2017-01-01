import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  address: DS.attr("string"),
  contact: DS.attr("string"),
  employer: DS.attr("string"),
  activating: DS.attr("string"),
  assetType: DS.attr("string"),
  subtype: DS.attr("string"),
  comment: DS.attr("string"),
  opendate: DS.attr("string"),
  closedate: DS.attr("string"),
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  city: DS.belongsTo("city")
});