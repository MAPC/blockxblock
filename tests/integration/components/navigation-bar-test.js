import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('navigation-bar', 'Integration | Component | navigation bar',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#navigation-bar}}
      //     template content
      //   {{/navigation-bar}}
      // `);

      this.render(hbs`{{navigation-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
