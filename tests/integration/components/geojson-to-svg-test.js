import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('geojson-to-svg', 'Integration | Component | geojson to svg',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#geojson-to-svg}}
      //     template content
      //   {{/geojson-to-svg}}
      // `);

      this.render(hbs`{{geojson-to-svg}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
