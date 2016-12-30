import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  address: DS.attr("string"),
  contact: DS.attr("string"),
  employer: DS.attr("string"),
  activating: DS.attr("string"),
  city: DS.belongsTo("city"),
  latitude: DS.attr("number"),
  longitude: DS.attr("number")
});
