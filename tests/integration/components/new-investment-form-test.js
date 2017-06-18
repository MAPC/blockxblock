import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('new-investment-form', 'Integration | Component | new investment form',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#new-investment-form}}
      //     template content
      //   {{/new-investment-form}}
      // `);

      this.render(hbs`{{new-investment-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
