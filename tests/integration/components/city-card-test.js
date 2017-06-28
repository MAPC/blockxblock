import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('city-card', 'Integration | Component | city card',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#city-card}}
      //     template content
      //   {{/city-card}}
      // `);

      this.render(hbs`{{city-card}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
