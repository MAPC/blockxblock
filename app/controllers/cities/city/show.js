import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['currentCity.showPlaces',
    'currentCity.showInvestments',
    'currentCity.showParcels'],

  currentCity: Ember.inject.service(),
  session: Ember.inject.service('session'),

  actions: {
    composeList(option, optionsList) {
      let list = this.get(optionsList).split('|');
      if(list.isAny('', option)) {
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
  }
});
