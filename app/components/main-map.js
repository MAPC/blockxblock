import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-map'],
  currentCity: Ember.inject.service(),
  zoom: Ember.computed.alias('currentCity.zoom'),
  lat: Ember.computed.alias('currentCity.latitude'),
  lng: Ember.computed.alias('currentCity.longitude'),
  city: Ember.computed.alias('currentCity.city'),
  maxZoom: 18,

  basemap: 'default',

  actions: {
    updateNewPoint(map) {
      let currentCity = this.get('currentCity');
      let center = map.target.getCenter();

      Ember.run.next(this, () => {
        currentCity.setProperties({
          'newPointLatitude': center.lat,
          'newPointLongitude': center.lng 
        });
      });
    },
    currentMapState(map) {
      let center = map.target.getCenter();
      let zoom = map.target.getZoom();
      let layerPoint = map.target.project(center).divideBy(256).floor();
      let currentCity = this.get('currentCity');

      Ember.run.next(this, () => {
        this.setProperties({
          layerPointx: layerPoint.x,
          layerPointy: layerPoint.y,
          layerPointz: zoom
        });

        currentCity.setProperties({
          'selectedPointLatitude': currentCity.newPointLatitude,
          'selectedPointLongitude': currentCity.newPointLongitude 
        });
      });
    },
    initMap(event) {
      let map = event.target;
      let currentCity = this.get('currentCity');
      this.set('mapInstance', map);

      map.zoomControl.setPosition('topright');

      map.createPane('points');
      map.getPane('points').style.zIndex = 325;

      map.createPane('extrusions');
      map.getPane('extrusions').style.zIndex = 950;
      map.getPane('extrusions').style.pointerEvents = 'none';

      map.createPane('parcels');
      map.getPane('parcels').style.zIndex = 375;

      currentCity.set('mapInstance', map);
    }
  }
});
