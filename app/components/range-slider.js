import RangeSlider from 'ember-cli-nouislider/components/range-slider';

export default RangeSlider.extend({
  init() {
    console.log(this.get('start'));
    return this._super(...arguments);
  }
});
