import Ember from 'ember';

const ICON_SIZE = 35;

export default Ember.Component.extend({

  currentCity: Ember.inject.service(),

  showInvestments: true,
  _rendered: null,

  icons: Ember.computed('feature.investments.[]', 'currentCity.visibleInvestments.[]', function() {
    const feature = this.get('feature');
    const showInvestments = this.get('showInvestments');
    const visibleInvestments = this.get('currentCity.visibleInvestments');

    const icons = feature.get('investments').map(investment => {
      if (visibleInvestments.includes(investment)) {
        const icon = investment.get('iconUrl');
        let iconName = icon.split('/');
        iconName = iconName[iconName.length - 1].replace('.png', '');
        return `<img src=${icon} data-icon="${iconName}"/>`;
      }
      else {
        return null; 
      }
    }).filter(icon => icon !== null);

    return icons;
  }),


  iconContainerSize: Ember.computed('icons.[]', 'showInvestments', function() {
    const showInvestments = this.get('showInvestments');
    const pixelsForInvestments =
      showInvestments ? this.get('icons.length') * ICON_SIZE : 0;

    return [(ICON_SIZE + pixelsForInvestments), ICON_SIZE];
  }),


  markup: Ember.computed('showInvestments', 'icons.[]', function() {
    const showInvestments = this.get('showInvestments');
    const feature = this.get('feature');
    const icons = this.get('icons');

    const rendered = `
      <div class="ui mini images">
        <img src="${feature.get('iconUrl').dasherize()}"/>
        ${showInvestments ? icons : ''}
      </div>
    `;

    if (icons.length > 0) {
      this.set('_rendered', rendered);
      return rendered;
    }
    else {
      return this.get('_rendered');
    }
  }),

});
