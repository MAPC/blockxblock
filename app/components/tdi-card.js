import Ember from 'ember';

export default Ember.Component.extend({
  modelContext: null,
  height: 300,
  style: Ember.computed(function() {
    let { height, image } = this.getProperties('height', 'image');
    return Ember.String.htmlSafe(`min-height: ${height}px; background-image: url('${image}'); background-size: cover;`);
  }),
  route: Ember.computed('modelContext', function() {
    let inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
    return `cities.city.${inflector.pluralize(this.get('modelContext').constructor.modelName)}`;
  })
});
