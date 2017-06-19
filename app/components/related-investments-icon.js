import Ember from 'ember';
const ICON_SIZE = 35;

export default Ember.Component.extend({
  iconSize: Ember.computed('feature.investments.[]', function() {
    // (array (if feature.investments.length (product-of 35 feature.investments.length) 35) 35) 
    let feature = this.get('feature');
    return [(35 + (feature.get('investments.length') * ICON_SIZE)), 35];
  }),
  markup: Ember.computed('feature.investments.[]', function() {
    let feature = this.get('feature');
    let icons = feature.get('investments').mapBy('iconUrl').map(icon=> {
      return `<img src=${icon} />`;
    });

    return `<div class="ui mini images"><img src="${feature.get('iconUrl')}"/>${icons}</div>`;
  })
});
