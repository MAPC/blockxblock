import Ember from 'ember';
const ICON_SIZE = 35;

export default Ember.Component.extend({
  showInvestments: true,
  iconSize: Ember.computed('feature.investments.[]', 'showInvestments', function() {
    const showInvestments = this.get('showInvestments');
    const pixelsForInvestments =
      showInvestments ? this.get('feature.investments.length') * ICON_SIZE : 0;


    return [
      (35 + pixelsForInvestments), 35
    ];
  }),
  markup: Ember.computed('feature.investments.[]', 'showInvestments', function() {
    const feature = this.get('feature');
    const showInvestments = this.get('showInvestments');
    const icons = feature.get('investments').mapBy('iconUrl').map(icon=> {
      let iconName = icon.split('/');
      iconName = iconName[iconName.length - 1].replace('.png', '');
      return `<img src=${icon} data-icon="${iconName}"/>`;
    });

    return `
      <div class="ui mini images">
        <img src="${feature.get('iconUrl').dasherize()}"/>
        ${showInvestments ? icons : ''}
      </div>
    `;
  })
});
