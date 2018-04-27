import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.run.schedule('afterRender', this, function(){
      // let model = this.get("model");
      // let streetAddress = this.get("streetAddress")
      // let addrs = model.get(streetAddress);
      // console.log(model,streetAddress,addrs)

      this.$('.ui.accordion').accordion();
    });
  }
});
