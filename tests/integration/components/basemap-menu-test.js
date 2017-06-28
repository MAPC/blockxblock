import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('basemap-menu', 'Integration | Component | basemap menu',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#basemap-menu}}
      //     template content
      //   {{/basemap-menu}}
      // `);

      this.render(hbs`{{basemap-menu}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
