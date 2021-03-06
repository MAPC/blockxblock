import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('file-upload', 'Integration | Component | file upload',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#file-upload}}
      //     template content
      //   {{/file-upload}}
      // `);

      this.render(hbs`{{file-upload}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
