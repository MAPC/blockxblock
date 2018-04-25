import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  currentCity: Ember.inject.service(),

  totalInvestments: Ember.computed('currentCity', function() {
    let m = this.get('model')

    console.log("asdasdasdasd")
    console.log(m)
    console.log(m.get('investments'))
    return 0;
  }),
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
