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
    const query = this.get('query');
    let results = [];

    if (query.length > 0) {
      const queryWords = query.toLowerCase().split(' ');

      results = places.filter(place => {
        const keywords = place.get('name').toLowerCase().split(' ');

        const matchesKeywords = queryWords.every(queryWord => (
          keywords.any(keyword => keyword.startsWith(queryWord))
        ));

        return matchesKeywords;
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
