import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['component', 'date-selector'],

  options: Ember.computed('startValue', 'scope', function() {
    const { startValue, scope } = this.getProperties('startValue', 'scope');

    if (scope === 'month') {
      return [...Array(12).keys()].map(i => String(++i >= 10 ? i : `0${i}`));
    }
    else { // year
      const startYear = this.get('startYear') || 2013;
      const endYear = (new Date()).getFullYear();
      const range = Math.abs(startYear - endYear) + 1; // Inclusive year range

      return [...Array(range).keys()].map(i => String(startYear + i));
    }
  }),

  actions: {
    updateValue({ target }) {
      this.sendAction('onSelect', target.value);
    },
  },

});
