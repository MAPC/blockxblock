import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload, primaryModelClass);

    if(requestType === 'query') {
      payload.forEach(record => {
        if (record.city) {
          record.city = record.city[0].id;
        }

        if (record.investments) {
          record.investments = record.investments.map(inv=>inv.id);
        }

        if (record.related_investments) {
          record.related_investments = record.related_investments.map(inv=>inv.id);
        }
      });
    }

    if(requestType === 'findRecord') {
      if (payload.city) {
        payload.city = payload.city[0].id;
      }

      if (payload.related_investments) {
        payload.related_investments = payload.related_investments.map(inv=>inv.id);
      }

      if (payload.related_features) {
        payload.related_features = payload.related_features.map(feat=>feat.id);
      }

      if (payload.investments) {
        payload.investments = payload.investments.map(inv=>inv.id);
      }
    }
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
