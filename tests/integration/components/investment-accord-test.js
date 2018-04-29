import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('investment-accord', 'Integration | Component | investment accord', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{investment-accord}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#investment-accord}}
      template block text
    {{/investment-accord}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
