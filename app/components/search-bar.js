import Ember from 'ember';


export default Ember.Component.extend({

  currentCity: Ember.inject.service(),

  classNames: ['component', 'search-bar'],
  tagName: 'div',
  query: '',


  places: Ember.computed('model', function() {
    return this.get('model').rejectBy('location_type', 'District-wide');
  }),
  

  inputPlaceholder: Ember.computed('currentCity.city.name', function() {
    const city = this.get('currentCity.city.name');
    const text = 'Search Places';

    return city ? `${text} in ${city} ...` : `${text} ...`;
  }),


  results: Ember.computed('query', 'places', function() {
    const places = this.get('places');
    let query = this.get('query');
    let results = [];

    if (query.length > 0) {
      query = query.toLowerCase();

      results = places.filter(place => {
        const words = place.get('name').toLowerCase().split(' ');

        return words.any(word => word.startsWith(query));
      }).sortBy(place => place.name);
    }

    return results;
  }),


  actions: {
    showResult(result) {
      this.set('query', '');

      this.sendAction('handleClick', result);
    },

    clearQuery() {
      this.set('query', '');
    },
  },

});
