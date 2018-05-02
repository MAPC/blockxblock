import Ember from 'ember';


export default Ember.Component.extend({

  classNames: ['component', 'search-bar'],
  tagName: 'div',
  query: '',


  inputPlaceholder: Ember.computed('city', function() {
    const city = this.get('city');
    const text = 'Search Places';

    return city ? `${text} in ${city}` : text;
  }),


  results: Ember.computed('query', 'model', function() {
    const query = this.get('query');
    const model = this.get('model');
    const results = [];

    if (query.length > 0) {
             
    }

    return results;
  }),

});
