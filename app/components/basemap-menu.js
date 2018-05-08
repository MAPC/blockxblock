import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({

  currentCity: Ember.inject.service(),
  classNames: ['component', 'basemap-menu'],

  x: 1,
  y: 1,
  z: 1,
  ready: computed('x','y','z', function() {
    let { x, 
          y, 
          z } = this.getProperties('x','y','z');
    
    return (x && y && z);
  }),

  actions: {
    setTimelineMonth(month) {
      this.set('currentCity.timelineMonth', month);
    },

    setTimelineYear(year) {
      this.set('currentCity.timelineYear', year);
    },
  },
});
