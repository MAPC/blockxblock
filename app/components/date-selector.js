import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['component', 'date-selector'],

  options: Ember.computed('startValue', 'scope', function() {

    console.log(this.get('selectedValue'));

    const { startValue, scope } = this.getProperties('startValue', 'scope');

    if (scope === 'month') {
      return (new Array(12)).fill(true).map((_, i) => String(++i >= 10 ? i : `0${i}`));
    }
    else { // year
      const startYear = this.get('startYear') || 2010;
      const endYear = (new Date()).getFullYear();
      const range = Math.abs(startYear - endYear) + 1; // Inclusive year range

      return (new Array(range)).fill(true).map((_, i) => String(startYear + i));
    }
  }),

  actions: {
    updateValue({ target }) {
      this.sendAction('onSelect', target.value);
    },
  },

});
