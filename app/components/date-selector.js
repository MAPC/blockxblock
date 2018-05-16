import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['component', 'date-selector'],

  options: Ember.computed('startValue', 'scope', function() {
    const { startValue, scope } = this.getProperties('startValue', 'scope');

    if (scope === 'month') {
      const months = [];
      for (let i = 0; i < 12;) {
        months.push(String(++i >= 10 ? i : `0${i}`));
      }

      return months;
    }
    else { // year
      const startYear = this.get('startYear') || 2013;
      const endYear = (new Date()).getFullYear();
      const range = Math.abs(startYear - endYear) + 1; // Inclusive year range

      const years = [];
      for (let i = 0; i < range; i++) {
        years.push(String(startYear + i));
      }

      return years;
    }
  }),

  actions: {
    updateValue({ target }) {
      this.sendAction('onSelect', target.value);
    },
  },

});
