import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('main-map', 'Integration | Component | main map',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#main-map}}
      //     template content
      //   {{/main-map}}
      // `);

      this.render(hbs`{{main-map}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
