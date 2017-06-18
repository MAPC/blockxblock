import Ember from 'ember';

export function constructRelatedInvestmentsMarkup(params) {
  let feature = params[0];
  let icons = params[1].mapBy('iconUrl').map(icon=> {
    return `<img src=${icon} class="ui image" />`;
  });

  return `<div><img src="${feature.get('iconUrl')}"/> Investments: ${icons.length} ${icons}</div>`;
}

export default Ember.Helper.helper(constructRelatedInvestmentsMarkup);
