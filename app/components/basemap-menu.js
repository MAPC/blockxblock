import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
  x: 1,
  y: 1,
  z: 1,
  ready: computed('x','y','z', function() {
    let { x, 
          y, 
          z } = this.getProperties('x','y','z');
    
    return (x && y && z);
  })
});
