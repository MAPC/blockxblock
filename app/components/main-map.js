import Ember from 'ember';
import computed from 'ember-computed';
import setChoroplethColor from '../utils/set-choropleth-color';
import { PARCEL_MAP_CONFIG } from '../models/parcel';

const { alias } = Ember.computed;

export default Ember.Component.extend({
  currentCity: Ember.inject.service(),
  classNames: ['main-map'],


  choroplethLayer: 'Available Spaces',
  parcelsChoroplethMapping: computed('visibleParcels', 'choroplethLayer', function() {
    return (feature) => {
      let color = setChoroplethColor(feature, this.get('choroplethLayer'), PARCEL_MAP_CONFIG),
          stroke = true,
          fillOpacity=0.5,
          strokeOpacity=1,
          weight=1;
      return {
        color,
        stroke,
        fillOpacity,
        strokeOpacity,
        weight
      }
    }
  }),
  zoom: Ember.computed.alias('currentCity.zoom'),
  lat: Ember.computed.alias('currentCity.latitude'),
  lng: Ember.computed.alias('currentCity.longitude'),
  city: Ember.computed.alias('currentCity.city'),
  maxZoom: 20,
  maxNativeZoom: 18,

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
