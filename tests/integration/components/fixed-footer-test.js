import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('fixed-footer', 'Integration | Component | fixed footer',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#fixed-footer}}
      //     template content
      //   {{/fixed-footer}}
      // `);

      this.render(hbs`{{fixed-footer}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
