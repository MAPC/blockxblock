import Ember from 'ember';

import { number_format } from 'ember-string-helpers/utils/functions';
import computed from 'ember-computed';
import csvFactory from '../utils/csv-factory';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  currentCity: service(),
  searchables: Ember.computed('currentCity.city', 'currentCity.city.places.[]', 'currentCity.city.investments.[]', function() {
    let places = this.get('currentCity.places');
    let investments = this.get('currentCity.investments');
    let structured = [];

    places.forEach(function(feature) {
      structured.push({ title: `${feature.get('feature_name')} (Feature)`, id: feature.get('id'), type: 'feature' })
    });

    investments.forEach(function(investment) {
      structured.push({ title: `${investment.get('project')} (Investment)`, id: investment.get('id'), type: 'investment' })
    });

    return structured;
  }),
  actions: {
    composeList(option, optionsList) {
      let list = this.get(optionsList).split('|');
      if(list.includes(option)) {
        list.removeObject(option);
      } else {
        list.pushObject(option);
      }
      this.set(optionsList, list.join('|'));
    },
    updateRanges(test) {
      this.set('valueMin', test[0]);
      this.set('valueMax', test[1]);
    },
    openModal(name, feature) {
      $('.ui.' + name + '.modal').modal('show');
      this.set('currentFeature', feature);
    },
    linkTo(route, model) {
      this.transitionToRoute(route, model);
    },
    changeProperty(key, value) {
      this.set(key, value);
    },
    updateDate(date){
      this.set('fake_open_or_closed', new Date(date));
      this.set('investments_fake_open_or_closed', new Date(date));
    },
    updateSliderDate(val) {
      this.set('fake_open_or_closed', val);
    },
    export_csv(resource, exceptions) {
      let resources = csvFactory(this.get(resource), exceptions);
      this.get('csv').export(resources, {fileName: `${resource}.csv`});
    }
  },

  investmentsValues: computed.mapBy('visibleInvestments', 'value'),
  maxInvestments: computed.max('investmentsValues', 'visibleInvestments'),

  tooltipsConfig: [
    { to: (num) => number_format(num, 0) },
    { to: (num) => number_format(num, 0) }
  ]
});

