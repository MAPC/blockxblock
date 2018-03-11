import Ember from 'ember';

export function humanizeString(params/*, hash*/) {
  return params[0];
}

export default Ember.Helper.helper(humanizeString);
