import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('statewide-map', 'Integration | Component | statewide map',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#statewide-map}}
      //     template content
      //   {{/statewide-map}}
      // `);

      this.render(hbs`{{statewide-map}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
