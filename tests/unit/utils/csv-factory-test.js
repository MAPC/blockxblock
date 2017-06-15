import { expect } from 'chai';
import { describe, it } from 'mocha';
import csvFactory from 'cityxcity/utils/csv-factory';

describe('Unit | Utility | csv factory', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = csvFactory();
    expect(result).to.be.ok;
  });
});
