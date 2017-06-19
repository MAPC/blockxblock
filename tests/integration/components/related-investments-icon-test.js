import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('related-investments-icon', 'Integration | Component | related investments icon',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#related-investments-icon}}
      //     template content
      //   {{/related-investments-icon}}
      // `);

      this.render(hbs`{{related-investments-icon}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
