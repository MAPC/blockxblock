import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parcel-accord', 'Integration | Component | parcel accord', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{parcel-accord}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#parcel-accord}}
      template block text
    {{/parcel-accord}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
