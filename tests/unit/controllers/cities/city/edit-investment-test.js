import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('controller:cities/city/edit-investment', 'Unit | Controller | cities/city/edit investment',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let controller = this.subject();
      expect(controller).to.be.ok;
    });
  }
);
