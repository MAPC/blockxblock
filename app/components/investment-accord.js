import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.run.schedule('afterRender', this, function(){
      this.$('.ui.accordion').accordion();
    });
  }
});
