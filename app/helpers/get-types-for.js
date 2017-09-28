import Ember from 'ember';
import fetch from 'fetch';

const { get } = Ember;

export function getTypesFor([table, field]) {
  return fetch(`/data/${table}.json`)
    .then(blob => {
      return blob.json();
    })
    .then(placesFields => {
      return get(placesFields, `${field}.enum`);
    });
}

export default Ember.Helper.helper(getTypesFor);
