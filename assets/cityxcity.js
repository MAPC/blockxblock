"use strict";



define('cityxcity/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    host: 'https://api.fieldbook.com/v1/58765e1fa945af0400dbe354'
  });
});
define('cityxcity/adapters/city', ['exports', 'cityxcity/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    pathForType: function pathForType(modelName) {
      return 'districts';
    }
  });
});
define('cityxcity/adapters/parcel', ['exports', 'cityxcity/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    host: 'https://fieldbookcode.com/58765e1fa945af0400dbe354',
    pathForType: function pathForType() {
      return 'parcels-geo';
    },
    urlForFindRecord: function urlForFindRecord(id) {
      return 'https://api.fieldbook.com/v1/58765e1fa945af0400dbe354/parcels/' + id;
    }
  });
});
define('cityxcity/app', ['exports', 'cityxcity/resolver', 'ember-load-initializers', 'cityxcity/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('cityxcity/blueprints/ember-string-helpers', ['exports', 'ember-string-helpers/blueprints/ember-string-helpers'], function (exports, _emberStringHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberStringHelpers.default;
    }
  });
});
define('cityxcity/components/accord-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _arrayPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayPathLayer.default;
    }
  });
});
define('cityxcity/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _baseLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseLayer.default;
    }
  });
});
define('cityxcity/components/basemap-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    x: 1,
    y: 1,
    z: 1,
    ready: Ember.computed('x', 'y', 'z', function () {
      var _getProperties = this.getProperties('x', 'y', 'z'),
          x = _getProperties.x,
          y = _getProperties.y,
          z = _getProperties.z;

      return x && y && z;
    })
  });
});
define('cityxcity/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _circleLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleLayer.default;
    }
  });
});
define('cityxcity/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _circleMarkerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleMarkerLayer.default;
    }
  });
});
define('cityxcity/components/cities-grid', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['cities-grid-component']
  });
});
define('cityxcity/components/city-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _containerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _containerLayer.default;
    }
  });
});
define('cityxcity/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _divOverlayLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divOverlayLayer.default;
    }
  });
});
define('cityxcity/components/edit-resource', ['exports', 'cityxcity/models/feature', 'cityxcity/models/investment', 'cityxcity/models/parcel'], function (exports, _feature, _investment, _parcel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    submitRoute: 'submit',
    investmentTypes: _investment.INVESTMENT_TYPES,
    investmentSources: _investment.INVESTMENT_SOURCES,
    assetTypes: _feature.FEATURE_TYPES,
    parcelOwnershipTypes: _parcel.PARCEL_OWNERSHIP_TYPES,
    assetSubTypes: Ember.computed(function () {
      return Ember.Object.create(_feature.FEATURE_SUBTYPES);
    }),
    currentCity: Ember.inject.service('currentCity'),
    modelName: Ember.computed('model', function () {
      var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
      return inflector.pluralize(this.get('model').constructor.modelName);
    }),
    actions: {
      submit: function submit(object) {
        var _this = this;

        var currentCity = this.get('currentCity');

        object.setProperties({
          latitude: currentCity.get('newPointLatitude'),
          longitude: currentCity.get('newPointLongitude')
        });

        return object.save().then(function (model) {
          _this.get('router').transitionTo('cities.city.' + _this.get('modelName'), model);
        });
      }
    }
  });
});
define('cityxcity/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('cityxcity/components/enumerate-properties', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/export-data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/file-field-progress', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    progress: 0,
    message: 'Uploading',
    barStyle: Ember.computed('progress', function () {
      var progress = this.get('progress');
      return Ember.String.htmlSafe('transition-duration: 300ms; width: ' + progress + '%;');
    })
  });
});
define('cityxcity/components/file-upload', ['exports', 'ember-uploader'], function (exports, _emberUploader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberUploader.default.FileField.extend({
    progress: null,
    filesDidChange: function filesDidChange(files) {
      var _this = this;

      var uploader = _emberUploader.default.Uploader.create({
        url: this.get('url')
      });

      if (!Ember.isEmpty(files)) {
        // this second argument is optional and can to be sent as extra data with the upload
        uploader.upload(files[0]);
      }

      uploader.on('progress', function (e) {
        _this.set('progress', e.percent);
        // Handle progress changes
        // Use `e.percent` to get percentage
      });

      uploader.on('didUpload', function (e) {
        _this.set('progress', 100);
        _this.set('message', 'Success!');
      });
    }
  });
});
define('cityxcity/components/footer-nav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: ''
  });
});
define('cityxcity/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _geojsonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _geojsonLayer.default;
    }
  });
});
define('cityxcity/components/geojson-to-svg', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    geojson: [],
    didInsertElement: function didInsertElement() {
      var geojson = this.get('geojson');
      var mapW = this.$().height();
      var mapH = this.$().width();
      var projection = d3.geo.mercator().center([-71, 42]).scale(900).rotate([-180, 0]);
      var path = d3.geo.path().projection(projection);

      var elementId = this.get('elementId');
      var svg = d3.select('#' + elementId).append("svg").attr("width", 150).attr("height", 150);

      svg.append("g").selectAll("path").data([geojson]).enter().append("path").attr("d", path);
    }
  });
});
define('cityxcity/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _imageLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _imageLayer.default.extend({
    leafletProperties: ['url', 'opacity', 'pane']
  });
});
define('cityxcity/components/investment-accord', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      Ember.run.schedule('afterRender', this, function () {
        this.$('.ui.accordion').accordion();
      });
    }
  });
});
define('cityxcity/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _leafletMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletMap.default;
    }
  });
});
define('cityxcity/components/main-map', ['exports', 'cityxcity/utils/set-choropleth-color', 'cityxcity/models/parcel'], function (exports, _setChoroplethColor, _parcel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var alias = Ember.computed.alias;
  exports.default = Ember.Component.extend({
    currentCity: Ember.inject.service(),
    classNames: ['main-map'],

    choroplethLayer: 'Available Spaces',
    parcelsChoroplethMapping: Ember.computed('visibleParcels', 'currentCity.choroplethLayer', function () {
      var _this = this;

      return function (feature) {
        var color = (0, _setChoroplethColor.default)(feature, _this.get('currentCity.choroplethLayer'), _parcel.PARCEL_MAP_CONFIG),
            stroke = true,
            fillOpacity = 0.5,
            strokeOpacity = 1,
            weight = 1;
        return {
          color: color,
          stroke: stroke,
          fillOpacity: fillOpacity,
          strokeOpacity: strokeOpacity,
          weight: weight
        };
      };
    }),
    zoom: Ember.computed.alias('currentCity.zoom'),
    lat: Ember.computed.alias('currentCity.latitude'),
    lng: Ember.computed.alias('currentCity.longitude'),
    city: Ember.computed.alias('currentCity.city'),
    maxZoom: 20,
    maxNativeZoom: 18,
    maxClusterRadius: 35,
    disabledClusteringAtZoom: 17,

    basemap: 'default',

    actions: {
      updateNewPoint: function updateNewPoint(map) {
        var currentCity = this.get('currentCity');
        var center = map.target.getCenter();

        Ember.run.next(this, function () {
          currentCity.setProperties({
            'newPointLatitude': center.lat,
            'newPointLongitude': center.lng
          });
        });
      },
      currentMapState: function currentMapState(map) {
        var _this2 = this;

        var center = map.target.getCenter();
        var zoom = map.target.getZoom();
        var layerPoint = map.target.project(center).divideBy(256).floor();
        var currentCity = this.get('currentCity');

        Ember.run.next(this, function () {
          _this2.setProperties({
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
      initMap: function initMap(event) {
        var map = event.target;
        var currentCity = this.get('currentCity');
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
});
define('cityxcity/components/main-nav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: ''
  });
});
define('cityxcity/components/map-popup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var POPUP_OFFSET = 10;

  exports.default = Ember.Component.extend({
    classNames: ['ui', 'segment', 'map-popup'],
    classNameBindings: ['hidden'],
    attributeBindings: ['style'],
    style: Ember.computed('left', 'right', function () {
      var left = this.get('left') + POPUP_OFFSET;
      var top = this.get('top') + POPUP_OFFSET;
      return Ember.String.htmlSafe('left: ' + left + 'px; top: ' + top + 'px');
    }),
    hidden: true,
    currentCity: Ember.inject.service(),
    actions: {
      onMouseover: function onMouseover(event) {
        this.set('hidden', false);
        var mapInstance = this.get('currentCity.mapInstance');
        var clientClick = mapInstance.latLngToContainerPoint(event.latlng);
        this.set('top', clientClick.y);
        this.set('left', clientClick.x);
        window.point = event;
      },
      onMouseout: function onMouseout(event) {
        this.set('hidden', true);
      }
    }
  });
});
define('cityxcity/components/marker-cluster-layer', ['exports', 'ember-leaflet-marker-cluster/components/marker-cluster-layer'], function (exports, _markerClusterLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markerClusterLayer.default;
    }
  });
});
define('cityxcity/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _markerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markerLayer.default;
    }
  });
});
define('cityxcity/components/new-investment-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/over-time-chart', ['exports', 'moment', 'd3-collection'], function (exports, _moment, _d3Collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function flatten(arr) {
    return arr.reduce(function (a, b) {
      return a.concat(b);
    }, []);
  }

  exports.default = Ember.Component.extend({
    dates: null,
    classNames: ['over-time-chart'],
    openDates: Ember.computed('models', function () {
      var models = this.get('models');
      if (Array.isArray(models)) {
        models = flatten(models.invoke('map', function (model) {
          return model;
        }));
      }
      return flatten(models.mapBy('fake_open_or_closed').invoke('filterBy', 'status', 'open'));
    }),
    openDateStamps: Ember.computed('openDates', function () {
      var models = this.get('openDates');
      return models.mapBy('quarter');
    }),
    openMonthYears: Ember.computed('openDateStamps', function () {
      var openDates = this.get('openDates');

      // return open
      // let grouped = nest().key((d) => { return d.type })
      //                     .rollup((d) => { return d.length; })
      //                     .entries(dates)
      //                     .sortBy((el) => { return el.key; });

      // grouped = grouped.map((el) => { 
      //   let date = new Date(el.key);
      //   let obj = { key: `${date.getFullYear()}-${date.getMonth()}-01` };
      //   let type1 = el.values[0];
      //   let type2 = el.values[1];

      //   if(type1) {
      //     obj[type1.key] = type1.value;
      //   }

      //   if(type2) {
      //     obj[type2.key] = type2.value;
      //   }

      //   return obj;
      // });

      // return grouped.sortBy((el) => { return new Date(el.key); });
    }),

    tooltipsConfig: [{ to: function to(num) {
        return (0, _moment.default)(num).format('MMM Do YYYY');
      } }],

    data: Ember.computed('dates', function () {
      var that = this;
      return {
        x: 'x',
        type: 'spline',
        json: this.get('dates'),
        keys: {
          x: 'key',
          value: ['feature', 'investment']
        }
      };
    }),
    legend: {
      show: false
    },

    padding: {
      left: 20,
      right: 40
    },

    tooltip: {
      show: false
    },

    grid: Ember.computed('selection', function () {
      var selection = new Date(this.get('selection'));
      var addMonth = new Date(selection.setMonth(selection.getMonth() + 1));
      var end = addMonth.getFullYear() + '-' + addMonth.getMonth() + '-01';
      return {
        x: {
          lines: [{ value: end, text: end }]
        }
      };
    }),
    regions: Ember.computed('selection', function () {
      var selection = new Date(this.get('selection'));

      var start = selection.getFullYear() + '-' + selection.getMonth() + '-01';
      var addMonth = new Date(selection.setMonth(selection.getMonth() + 1));

      var end = addMonth.getFullYear() + '-' + addMonth.getMonth() + '-01';

      return [{ axis: 'x', start: start, end: end, class: 'regionX' }];
    }),
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m'
        }
      },
      y: {
        show: false
      }
    },

    chartColors: {
      pattern: ['#5CA2D1', '#A53ED5']
    },

    size: {
      height: 100
    },

    // range-slider
    timeMin: Ember.computed('models', function () {
      var models = this.get('openDateStamps');
      return Math.min.apply(Math, _toConsumableArray(models));
    }),
    timeMax: Ember.computed('selection', function () {
      var models = this.get('openDateStamps');
      return Math.max.apply(Math, _toConsumableArray(models));
    }),

    defaultTime: Ember.computed(function () {
      var now = Date.now();
      var timeMin = this.get('timeMin');
      var timeMax = this.get('timeMax');

      if (now > timeMin && now < timeMax) {
        return now;
      }

      if (now < timeMin) {
        return timeMin;
      }

      if (now > timeMax) {
        return timeMax;
      }
    }),

    didInsertElement: function didInsertElement() {

      this.set('selection', this.get('defaultTime'));
    },


    onrendered: Ember.computed(function (c3) {
      var that = this;
      return function () {
        d3.selectAll('.c3-event-rect').on('click', function (d, element) {
          that.set('selection', d.x);
        });
        d3.selectAll('.c3-chart-lines').style('display', 'none');
      };
    }),

    actions: {
      update: function update(value) {
        // TODO ?
      }
    }
  });
});
define('cityxcity/components/parcel-accord', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      Ember.run.schedule('afterRender', this, function () {
        // let model = this.get("model");
        // let streetAddress = this.get("streetAddress")
        // let addrs = model.get(streetAddress);
        // console.log(model,streetAddress,addrs)

        this.$('.ui.accordion').accordion();
      });
    }
  });
});
define('cityxcity/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _pathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathLayer.default;
    }
  });
});
define('cityxcity/components/place-accord', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed;
  exports.default = Ember.Component.extend({
    currentCity: Ember.inject.service(),

    totalInvestments: Ember.computed('currentCity', function () {
      var m = this.get('model');

      return 0;
    }),
    didInsertElement: function didInsertElement() {
      Ember.run.schedule('afterRender', this, function () {
        this.$('.ui.accordion').accordion();
      });
    }
  });
});
define('cityxcity/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _pointPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pointPathLayer.default;
    }
  });
});
define('cityxcity/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _polygonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polygonLayer.default;
    }
  });
});
define('cityxcity/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _polylineLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polylineLayer.default;
    }
  });
});
define('cityxcity/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _popupLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popupLayer.default;
    }
  });
});
define('cityxcity/components/related-investments-icon', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ICON_SIZE = 35;

  exports.default = Ember.Component.extend({
    showInvestments: true,
    iconSize: Ember.computed('feature.investments.[]', 'showInvestments', function () {
      var showInvestments = this.get('showInvestments');
      var pixelsForInvestments = showInvestments ? this.get('feature.investments.length') * ICON_SIZE : 0;

      return [35 + pixelsForInvestments, 35];
    }),
    markup: Ember.computed('feature.investments.[]', 'showInvestments', function () {
      var feature = this.get('feature');
      var showInvestments = this.get('showInvestments');
      var icons = feature.get('investments').mapBy('iconUrl').map(function (icon) {
        var iconName = icon.split('/');
        iconName = iconName[iconName.length - 1].replace('.png', '');
        return '<img src=' + icon + ' data-icon="' + iconName + '"/>';
      });

      return '\n      <div class="ui mini images">\n        <img src="' + feature.get('iconUrl').dasherize() + '"/>\n        ' + (showInvestments ? icons : '') + '\n      </div>\n    ';
    })
  });
});
define('cityxcity/components/resource-grid', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/resource-nav-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('cityxcity/components/scroll-to', ['exports', 'ember-scroll-to/components/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _scrollTo.default;
});
define('cityxcity/components/search-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentCity: Ember.inject.service(),

    classNames: ['component', 'search-bar'],
    tagName: 'div',
    query: '',

    places: Ember.computed('model', function () {
      return this.get('model').rejectBy('location_type', 'District-wide');
    }),

    inputPlaceholder: Ember.computed('currentCity.city.name', function () {
      var city = this.get('currentCity.city.name');
      var text = 'Search Places';

      return city ? text + ' in ' + city + ' ...' : text + ' ...';
    }),

    results: Ember.computed('query', 'places', function () {
      var places = this.get('places');
      var query = this.get('query');
      var results = [];

      if (query.length > 0) {
        var queryWords = query.toLowerCase().split(' ');

        results = places.filter(function (place) {
          var keywords = place.get('name').toLowerCase().split(' ');

          var matchesKeywords = queryWords.every(function (queryWord) {
            return keywords.any(function (keyword) {
              return keyword.startsWith(queryWord);
            });
          });

          return matchesKeywords;
        }).sortBy(function (place) {
          return place.name;
        });
      }

      return results;
    }),

    actions: {
      showResult: function showResult(result) {
        this.set('query', '');

        this.sendAction('handleClick', result);
      },
      clearQuery: function clearQuery() {
        this.set('query', '');
      }
    }

  });
});
define('cityxcity/components/select-association', ['exports', 'cityxcity/utils/is-any-filter'], function (exports, _isAnyFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    currentCity: Ember.inject.service(),
    store: Ember.inject.service(),

    modelName: null,
    selected: null,

    options: Ember.computed('modelName', function () {
      var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
      var modelName = this.get('modelName');
      var inflectedModelName = inflector.pluralize(modelName);
      return this.get('currentCity.city.' + inflectedModelName);
    })
  });
});
define('cityxcity/components/statewide-map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    lat: 42,
    lng: -71.922,
    zoom: 9,
    actions: {
      linkTo: function linkTo(route, model) {
        this.transitionTo(route, model);
      }
    }
  });
});
define('cityxcity/components/tabbed-results', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      Ember.run.schedule('afterRender', this, function () {
        this.$('.menu .item').tab();
      });
    }
  });
});
define('cityxcity/components/tdi-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    modelContext: null,
    height: 300,
    style: Ember.computed(function () {
      var _getProperties = this.getProperties('height', 'image'),
          height = _getProperties.height,
          image = _getProperties.image;

      return Ember.String.htmlSafe('min-height: ' + height + 'px; background-image: url(\'' + image + '\'); background-size: cover;');
    }),
    route: Ember.computed('modelContext', function () {
      var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
      return 'cities.city.' + inflector.pluralize(this.get('modelContext').constructor.modelName);
    })
  });
});
define('cityxcity/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _tileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tileLayer.default;
    }
  });
});
define('cityxcity/components/timeline-builder', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  exports.default = Ember.Component.extend({
    setupSnapshots: function () {
      var snapshots = this.get('snapshots');
      if (!snapshots) {
        this.set('snapshots', Em.A([]));
      }
    }.on('init'),
    months: MONTHS,
    month: '01',
    year: 2016,
    status: null,
    snapshots: [],
    orderedSnapshots: Ember.computed('snapshots.[]', function () {
      var snapshots = this.get('snapshots');
      if (!Ember.isEmpty(snapshots)) {
        return snapshots.sortBy(function (el) {
          return el.date;
        });
      } else {
        return snapshots;
      }
    }),
    actions: {
      addNew: function addNew() {
        var _getProperties = this.getProperties('snapshots', 'month', 'year', 'choices.firstObject'),
            snapshots = _getProperties.snapshots,
            month = _getProperties.month,
            year = _getProperties.year,
            choice = _getProperties.choice;

        if (snapshots) {
          snapshots.pushObject({ date: year + '-' + month, status: choice });
        } else {
          snapshots.pushObject({ date: year + '-' + month, status: choice });
        }
      }
    }
  });
});
define('cityxcity/components/timeline-edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  exports.default = Ember.Component.extend({
    months: MONTHS,
    year: 2016
  });
});
define('cityxcity/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _tooltipLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tooltipLayer.default;
    }
  });
});
define('cityxcity/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _uiAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
define('cityxcity/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
define('cityxcity/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _uiDimmer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
define('cityxcity/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _uiDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
define('cityxcity/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _uiEmbed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
define('cityxcity/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
define('cityxcity/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _uiNag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
define('cityxcity/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
define('cityxcity/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
define('cityxcity/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
define('cityxcity/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _uiRating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
define('cityxcity/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _uiSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _uiSearch.default.extend({
    // refreshSource: Ember.observer('source', function() {
    //   this.set('source', this.get('source'));
    //   this.rerender();
    // })
    classNames: 'ui search',
    didInsertElement: function didInsertElement() {
      this.updateSource();
    },

    updateSource: Ember.observer('source', function () {
      var _this = this;

      Ember.run.schedule('afterRender', this, function () {
        var that = _this;
        $('.ui.search').search({
          source: _this.get('source'),
          onSelect: function onSelect() {
            that.get('onSearchQuery')();
          }
        });
      });
    })
  });
});
define('cityxcity/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _uiShape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
define('cityxcity/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _uiSidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
define('cityxcity/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _uiSticky) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
define('cityxcity/components/ui-visibility-sticky', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  exports.default = Ember.Component.extend({
    classNames: ['ui-visibility-sticky'],
    currentCity: Ember.inject.service(),
    didInsertElement: function didInsertElement() {
      Ember.run.next(this, function () {
        this.$().visibility(_defineProperty({
          type: 'fixed',
          offset: 15,
          context: '#sidebar'
        }, 'offset', 64));
      });
    }
  });
});
define('cityxcity/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('cityxcity/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _wmsTileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wmsTileLayer.default;
    }
  });
});
define('cityxcity/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    currentCity: Ember.inject.service(),
    isLoggingIn: false,
    actions: {
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      },
      authenticate: function authenticate() {
        var _this = this;

        var _getProperties = this.getProperties('username', 'password'),
            username = _getProperties.username,
            password = _getProperties.password;

        this.get('session').authenticate('authenticator:devise', username, password).then(function () {
          _this.set('isLoggingIn', false);
        }).catch(function (reason) {
          _this.set('errorMessage', reason.error || reason);
        });
      }
    }
  });
});
define('cityxcity/controllers/cities', ['exports', 'ember-string-helpers/utils/functions', 'cityxcity/utils/csv-factory'], function (exports, _functions, _csvFactory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var service = Ember.inject.service;
  exports.default = Ember.Controller.extend({
    currentCity: service(),
    searchables: Ember.computed('currentCity.city', 'currentCity.city.places.[]', 'currentCity.city.investments.[]', function () {
      var places = this.get('currentCity.places');
      var investments = this.get('currentCity.investments');
      var structured = [];

      places.forEach(function (feature) {
        structured.push({ title: feature.get('feature_name') + ' (Feature)', id: feature.get('id'), type: 'feature' });
      });

      investments.forEach(function (investment) {
        structured.push({ title: investment.get('project') + ' (Investment)', id: investment.get('id'), type: 'investment' });
      });

      return structured;
    }),
    actions: {
      composeList: function composeList(option, optionsList) {
        var list = this.get(optionsList).split('|');
        if (list.includes(option)) {
          list.removeObject(option);
        } else {
          list.pushObject(option);
        }
        this.set(optionsList, list.join('|'));
      },
      updateRanges: function updateRanges(test) {
        this.set('valueMin', test[0]);
        this.set('valueMax', test[1]);
      },
      openModal: function openModal(name, feature) {
        $('.ui.' + name + '.modal').modal('show');
        this.set('currentFeature', feature);
      },
      linkTo: function linkTo(route, model) {
        this.transitionToRoute(route, model);
      },
      changeProperty: function changeProperty(key, value) {
        this.set(key, value);
      },
      updateDate: function updateDate(date) {
        this.set('fake_open_or_closed', new Date(date));
        this.set('investments_fake_open_or_closed', new Date(date));
      },
      updateSliderDate: function updateSliderDate(val) {
        this.set('fake_open_or_closed', val);
      },
      export_csv: function export_csv(resource, exceptions) {
        var resources = (0, _csvFactory.default)(this.get(resource), exceptions);
        this.get('csv').export(resources, { fileName: resource + '.csv' });
      }
    },

    investmentsValues: Ember.computed.mapBy('visibleInvestments', 'value'),
    maxInvestments: Ember.computed.max('investmentsValues', 'visibleInvestments'),

    tooltipsConfig: [{ to: function to(num) {
        return (0, _functions.number_format)(num, 0);
      } }, { to: function to(num) {
        return (0, _functions.number_format)(num, 0);
      } }]
  });
});
define('cityxcity/controllers/cities/city', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    actions: {
      showPlace: function showPlace(place) {
        this.transitionToRoute('cities.city.places', place);
      }
    }

  });
});
define('cityxcity/controllers/cities/city/investments', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('cityxcity/controllers/cities/city/parcels', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('cityxcity/controllers/cities/city/places', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    currentCity: Ember.inject.service(),

    totalInvestments: Ember.computed('currentCity', function () {
      var m = this.get('model');

      return 0;
    })
  });
});
define('cityxcity/controllers/cities/city/show', ['exports', 'ember-string-helpers/utils/functions'], function (exports, _functions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed;
  exports.default = Ember.Controller.extend({
    queryParams: ['currentCity.showPlaces', 'currentCity.showInvestments', 'currentCity.showParcels'],

    currentCity: Ember.inject.service(),

    tooltipsConfig: [{ to: function to(num) {
        return (0, _functions.number_format)(num, 0);
      } }, { to: function to(num) {
        return (0, _functions.number_format)(num, 0);
      } }],

    investmentsValues: computed.mapBy('currentCity.city.investments', 'estimated_amount'),
    maxInvestments: computed.max('investmentsValues', 'currentCity.city.investments'),
    minInvestments: computed.min('investmentsValues', 'currentCity.city.investments'),

    actions: {
      composeList: function composeList(option, optionsList) {
        var list = this.get(optionsList).split('|');
        if (list.includes(option)) {
          list.removeObject(option);
        } else {
          list.pushObject(option);
        }
        this.set(optionsList, list.join('|'));
      },
      updateRanges: function updateRanges(test) {
        this.set('currentCity.valueMin', test[0]);
        this.set('currentCity.valueMax', test[1]);
      },
      openModal: function openModal(name, feature) {
        $('.ui.' + name + '.modal').modal('show');
        this.set('currentFeature', feature);
      },
      linkTo: function linkTo(route, model) {
        this.transitionToRoute(route, model);
      },
      changeProperty: function changeProperty(key, value) {
        this.set(key, value);
      },
      updateDate: function updateDate(date) {
        this.set('fake_open_or_closed', new Date(date));
        this.set('investments_fake_open_or_closed', new Date(date));
      },
      updateSliderDate: function updateSliderDate(val) {
        this.set('fake_open_or_closed', val);
      },
      export_csv: function export_csv(resource, exceptions) {
        var resources = csvFactory(this.get(resource), exceptions);
        this.get('csv').export(resources, { fileName: resource + '.csv' });
      }
    }
  });
});
define('cityxcity/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('cityxcity/helpers/app-version', ['exports', 'cityxcity/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('cityxcity/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('cityxcity/helpers/array-contains', ['exports', 'ember-array-contains-helper/helpers/array-contains'], function (exports, _arrayContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayContains.default;
    }
  });
  Object.defineProperty(exports, 'arrayContains', {
    enumerable: true,
    get: function () {
      return _arrayContains.arrayContains;
    }
  });
});
define('cityxcity/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('cityxcity/helpers/attribute-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.attributeType = attributeType;
  function attributeType(params /*, hash*/) {
    var attribute = params[0];

    return Ember.typeOf(attribute);
  }

  exports.default = Ember.Helper.helper(attributeType);
});
define('cityxcity/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('cityxcity/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('cityxcity/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('cityxcity/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('cityxcity/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('cityxcity/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('cityxcity/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('cityxcity/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('cityxcity/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('cityxcity/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _divIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divIcon.default;
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function () {
      return _divIcon.divIcon;
    }
  });
});
define('cityxcity/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('cityxcity/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('cityxcity/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('cityxcity/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('cityxcity/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('cityxcity/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('cityxcity/helpers/format-date', ['exports', 'ember-string-helpers/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
  Object.defineProperty(exports, 'formatDate', {
    enumerable: true,
    get: function () {
      return _formatDate.formatDate;
    }
  });
});
define('cityxcity/helpers/format-phone', ['exports', 'ember-string-helpers/helpers/format-phone'], function (exports, _formatPhone) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatPhone.default;
    }
  });
  Object.defineProperty(exports, 'formatPhone', {
    enumerable: true,
    get: function () {
      return _formatPhone.formatPhone;
    }
  });
});
define('cityxcity/helpers/get-types-for', ['exports', 'fetch'], function (exports, _fetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTypesFor = getTypesFor;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var get = Ember.get;
  function getTypesFor(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        table = _ref2[0],
        field = _ref2[1];

    return (0, _fetch.default)('/data/' + table + '.json').then(function (blob) {
      return blob.json();
    }).then(function (placesFields) {
      return get(placesFields, field + '.enum');
    });
  }

  exports.default = Ember.Helper.helper(getTypesFor);
});
define('cityxcity/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('cityxcity/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('cityxcity/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('cityxcity/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('cityxcity/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('cityxcity/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('cityxcity/helpers/humanize-string', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.humanizeString = humanizeString;
  function humanizeString(params /*, hash*/) {
    return params[0];
  }

  exports.default = Ember.Helper.helper(humanizeString);
});
define('cityxcity/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define('cityxcity/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _icon.default;
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function () {
      return _icon.icon;
    }
  });
});
define('cityxcity/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('cityxcity/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('cityxcity/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('cityxcity/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('cityxcity/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('cityxcity/helpers/is-not-empty', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isNotEmpty = isNotEmpty;
  function isNotEmpty(params /*, hash*/) {
    var type = Ember.typeOf(params[0]);
    return type !== 'undefined' && type !== 'null' && params[0] !== "";
  }

  exports.default = Ember.Helper.helper(isNotEmpty);
});
define('cityxcity/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('cityxcity/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _latLngBounds) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _latLngBounds.default;
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function () {
      return _latLngBounds.latLngBounds;
    }
  });
});
define('cityxcity/helpers/lower-case', ['exports', 'ember-string-helpers/helpers/lower-case'], function (exports, _lowerCase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowerCase.default;
    }
  });
  Object.defineProperty(exports, 'lowerCase', {
    enumerable: true,
    get: function () {
      return _lowerCase.lowerCase;
    }
  });
});
define('cityxcity/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('cityxcity/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('cityxcity/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('cityxcity/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('cityxcity/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _mapValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
define('cityxcity/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('cityxcity/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('cityxcity/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('cityxcity/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('cityxcity/helpers/number-format', ['exports', 'ember-string-helpers/helpers/number-format'], function (exports, _numberFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _numberFormat.default;
    }
  });
  Object.defineProperty(exports, 'numberFormat', {
    enumerable: true,
    get: function () {
      return _numberFormat.numberFormat;
    }
  });
});
define('cityxcity/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('cityxcity/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('cityxcity/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('cityxcity/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('cityxcity/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('cityxcity/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('cityxcity/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _point.default;
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function () {
      return _point.point;
    }
  });
});
define('cityxcity/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('cityxcity/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('cityxcity/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('cityxcity/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('cityxcity/helpers/regexp-replace', ['exports', 'ember-string-helpers/helpers/regexp-replace'], function (exports, _regexpReplace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _regexpReplace.default;
    }
  });
  Object.defineProperty(exports, 'regexpReplace', {
    enumerable: true,
    get: function () {
      return _regexpReplace.regexpReplace;
    }
  });
});
define('cityxcity/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('cityxcity/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('cityxcity/helpers/replace-with', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.replaceWith = replaceWith;
  function replaceWith(params /*, hash*/) {
    return params[0].replace(params[1], params[2]);
  }

  exports.default = Ember.Helper.helper(replaceWith);
});
define('cityxcity/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('cityxcity/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('cityxcity/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('cityxcity/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('cityxcity/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('cityxcity/helpers/split-string', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.splitString = splitString;
  function splitString(params, delimiter) {
    if (!(typeof params === 'string')) return params;
    return params.split(delimiter);
  }

  exports.default = Ember.Helper.helper(splitString);
});
define('cityxcity/helpers/substr', ['exports', 'ember-string-helpers/helpers/substr'], function (exports, _substr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _substr.default;
    }
  });
  Object.defineProperty(exports, 'substr', {
    enumerable: true,
    get: function () {
      return _substr.substr;
    }
  });
});
define('cityxcity/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('cityxcity/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('cityxcity/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('cityxcity/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('cityxcity/helpers/transition-to', ['exports', 'ember-transition-helper/helpers/transition-to'], function (exports, _transitionTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionTo.default;
    }
  });
  Object.defineProperty(exports, 'transitionTo', {
    enumerable: true,
    get: function () {
      return _transitionTo.transitionTo;
    }
  });
});
define('cityxcity/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('cityxcity/helpers/uc-words', ['exports', 'ember-string-helpers/helpers/uc-words'], function (exports, _ucWords) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ucWords.default;
    }
  });
  Object.defineProperty(exports, 'ucWords', {
    enumerable: true,
    get: function () {
      return _ucWords.ucWords;
    }
  });
});
define('cityxcity/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('cityxcity/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('cityxcity/helpers/upper-case', ['exports', 'ember-string-helpers/helpers/upper-case'], function (exports, _upperCase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _upperCase.default;
    }
  });
  Object.defineProperty(exports, 'upperCase', {
    enumerable: true,
    get: function () {
      return _upperCase.upperCase;
    }
  });
});
define('cityxcity/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('cityxcity/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('cityxcity/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('cityxcity/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('cityxcity/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'cityxcity/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('cityxcity/initializers/component-router-injector', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    // Injects all Ember components with a router object:
    application.inject('component', 'router', 'router:main');
  }

  exports.default = {
    name: 'component-router-injector',
    initialize: initialize
  };
});
define('cityxcity/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('cityxcity/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('cityxcity/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('cityxcity/initializers/export-application-global', ['exports', 'cityxcity/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('cityxcity/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('cityxcity/initializers/leaflet-assets', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    if (typeof FastBoot === 'undefined') {
      var prefix = '';

      if (!Ember.isNone(_emberGetConfig.default.rootURL)) {
        prefix = _emberGetConfig.default.rootURL;
      } else if (!Ember.isNone(_emberGetConfig.default.baseURL)) {
        prefix = _emberGetConfig.default.baseURL;
      }

      L.Icon.Default.imagePath = prefix + 'assets/images/';
    }
  }

  exports.default = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('cityxcity/initializers/sort-by-date', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    if (typeof Object.defineProperty === 'function') {
      try {
        Object.defineProperty(Array.prototype, 'sortBy', { value: sb });
      } catch (e) {}
    }
    if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;
    function sb(f) {
      for (var i = this.length; i;) {
        var o = this[--i];
        this[i] = [].concat(f.call(o, o, i), o);
      }
      this.sort(function (a, b) {
        for (var i = 0, len = a.length; i < len; ++i) {
          if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
        }
        return 0;
      });
      for (var i = this.length; i;) {
        this[--i] = this[i][this[i].length - 1];
      }
      return this;
    }
  }

  exports.default = {
    name: 'sort-by-date',
    initialize: initialize
  };
});
define('cityxcity/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('cityxcity/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("cityxcity/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('cityxcity/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('cityxcity/mixins/center-map-on-geometry', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    currentCity: Ember.inject.service(),
    positionMap: function positionMap() {
      var currentCity = this.get('currentCity');
      var model = this.modelFor(this.routeName);
      var latitude = model.get('latitude');
      var longitude = model.get('longitude');

      model.set('isSelected', true);
      Ember.run.next(this, function () {
        currentCity.setProperties({
          latitude: latitude,
          longitude: longitude
        });
      });
    },

    actions: {
      didTransition: function didTransition() {
        this.positionMap();
        return this._super();
      },
      willTransition: function willTransition() {
        var model = this.modelFor(this.routeName);
        model.set('isSelected', false);
        return this._super();
      }
    }
  });
});
define('cityxcity/mixins/promise-resolver', ['exports', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _promiseResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseResolver.default;
    }
  });
});
define('cityxcity/models/city', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var alias = Ember.computed.alias;
  exports.default = _emberData.default.Model.extend({
    // regular attributes
    city_name: _emberData.default.attr('string'),
    district_name: _emberData.default.attr('string'),
    program_start_date: _emberData.default.attr('date'),
    fellow_status: _emberData.default.attr(),
    splash_image: _emberData.default.attr('string'),
    i2c_text: _emberData.default.attr('string'),
    district_contact_name: _emberData.default.attr('string'),
    district_contact_role: _emberData.default.attr('string'),
    district_contact_org: _emberData.default.attr('string'),
    district_contact_phone: _emberData.default.attr('string'),
    district_contact_email: _emberData.default.attr('string'),
    district_contact_website: _emberData.default.attr('string'),
    latitude: _emberData.default.attr('number'),
    longitude: _emberData.default.attr('number'),
    imageoverlay: _emberData.default.attr('string'),
    imageoverlaybbox: _emberData.default.attr('jsonstring'),
    live: _emberData.default.attr('boolean'),

    // aliases for name changes
    name: alias('city_name'),
    imageOverlay: alias('imageoverlay'),
    imageOverlayBBox: alias('imageoverlaybbox'),
    splash: alias('splash_image'),

    // relationships
    places: _emberData.default.hasMany('place'),
    parcels: _emberData.default.hasMany('parcel'),
    investments: _emberData.default.hasMany('investment')
  });
});
define('cityxcity/models/investment', ['exports', 'ember-data', 'cityxcity/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.INVESTMENT_FILTERS_CONFIG = exports.INVESTMENT_SOURCES = exports.INVESTMENT_STATUSES = exports.INVESTMENT_TYPES = undefined;
  var alias = Ember.computed.alias;


  var mapTypes = function mapTypes(type) {
    var typeMap = {
      'planning/strategy': 'planning-or-strategy'
    };

    return typeMap[type.toLowerCase()] || type;
  };

  exports.default = _emberData.default.Model.extend({
    // new attributes
    investment_id: _emberData.default.attr('string'),
    investment_descriptor: _emberData.default.attr('string'),
    street_address: _emberData.default.attr('string'),
    location_description: _emberData.default.attr('string'),
    in_district: _emberData.default.attr('boolean'),
    source_type: _emberData.default.attr('string'),
    tdi_product: _emberData.default.attr('string'),
    massdev_product: _emberData.default.attr('string'),
    public_product: _emberData.default.attr('string'),
    private_product: _emberData.default.attr('string'),
    use_type: _emberData.default.attr('string'),
    tdi_influence: _emberData.default.attr('boolean'),
    investment_status: _emberData.default.attr('timeline'),
    amount_is_public: _emberData.default.attr('boolean'),
    amount_is_exact: _emberData.default.attr('boolean'),
    exact_amount: _emberData.default.attr('number'),
    estimated_amount: _emberData.default.attr('number'),
    contact_type: _emberData.default.attr('string'),
    inv_contact_name: _emberData.default.attr('string'),
    inv_contact_role: _emberData.default.attr('string'),
    inv_contact_org: _emberData.default.attr('string'),
    inv_contact_phone: _emberData.default.attr('string'),
    inv_contact_email: _emberData.default.attr('string'),
    inv_contact_website: _emberData.default.attr('string'),
    project_name: _emberData.default.attr('string'),
    total_project_amount: _emberData.default.attr('number'),
    notes: _emberData.default.attr('string'),
    file_upload: _emberData.default.attr('string'),
    link_description: _emberData.default.attr('string'),
    link_url: _emberData.default.attr('string'),
    internal_notes: _emberData.default.attr('string'),
    internal_files: _emberData.default.attr('string'),
    splash: _emberData.default.attr('string'),
    i2c_text: _emberData.default.attr('string'),
    pub_name: _emberData.default.attr('string'),
    pub_role: _emberData.default.attr('string'),
    pub_organization: _emberData.default.attr('string'),
    pub_phone: _emberData.default.attr('string'),
    pub_email: _emberData.default.attr('string'),
    pub_website: _emberData.default.attr('string'),

    // computeds
    investment_status_latest: Ember.computed('investment_status', function () {
      return this.get('investment_status.firstObject.value');
    }),
    iconUrl: Ember.computed('source_type', 'investment_type', function () {
      var _getProperties = this.getProperties('source_type', 'investment_type'),
          source_type = _getProperties.source_type,
          investment_type = _getProperties.investment_type;

      return (_environment.default.prepend ? _environment.default.prepend : '/') + 'images/icons/investments/' + source_type.decamelize() + '/' + mapTypes(investment_type).dasherize() + '.png';
    }),

    iconWatermarkUrl: Ember.computed('source_type', 'investment_type', function () {
      var _getProperties2 = this.getProperties('source_type', 'investment_type'),
          source_type = _getProperties2.source_type,
          investment_type = _getProperties2.investment_type;

      return (_environment.default.prepend ? _environment.default.prepend : '/') + 'images/icons/investments/' + source_type.decamelize() + '/' + mapTypes(investment_type).dasherize() + '.png';
    }),

    investment_status_val: Ember.computed('investment_status', function () {
      var investmet_stat_v = this.get('investment_status.firstObject.value');
      return investmet_stat_v;
    }),

    investmentAmountEst: Ember.computed('estimated_amount', 'exact_amount', function () {
      var _getProperties3 = this.getProperties('estimated_amount', 'exact_amount'),
          estimated_amount = _getProperties3.estimated_amount,
          exact_amount = _getProperties3.exact_amount;
    }),

    useType: Ember.computed('use_type', function () {
      var use_type = this.get('use_type');
      return use_type;
    }),

    // aliases
    investment_type: alias('use_type'),
    relatedInvestments: alias('related_investments'),

    // relationships
    related_investments: _emberData.default.hasMany('investment', { inverse: 'relatedInvestment' }),
    relatedInvestment: _emberData.default.belongsTo('investment', { inverse: 'related_investments' }),
    feature: _emberData.default.hasMany('feature'),
    city: _emberData.default.belongsTo("city"),

    // local session state
    isSelected: false
  });


  // form options/categories
  var INVESTMENT_TYPES = exports.INVESTMENT_TYPES = ['Infrastructure', 'Finance', 'Planning or Strategy', 'Placemaking', 'Small Business Growth'];
  var INVESTMENT_STATUSES = exports.INVESTMENT_STATUSES = ['Proposed', 'In Progress', 'Completed'];
  var INVESTMENT_SOURCES = exports.INVESTMENT_SOURCES = ['MassDevelopment', 'Public', 'Private', 'TDI'];

  // filtering DSL
  var INVESTMENT_FILTERS_CONFIG = exports.INVESTMENT_FILTERS_CONFIG = [{
    property: 'investment_type',
    filter: 'investmentTypesArray',
    filterType: 'isAny'
  }, {
    property: 'investment_status_latest',
    filter: 'investmentStatusesArray',
    filterType: 'isAny'
  }, {
    property: 'source_type',
    filter: 'investmentSourcesArray',
    filterType: 'isAny'
  }, {
    property: 'estimated_amount',
    filter: ['valueMin', 'valueMax'],
    filterType: 'isWithin'
  }, {
    property: 'tdi_influence',
    filter: 'tdi_influence',
    filterType: 'isTrue'
  }];
});
define('cityxcity/models/parcel', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UFVACANCY_STATUSES = exports.GFVACANCY_STATUSES = exports.PARCEL_TYPES = exports.PARCEL_OWNERSHIP_TYPES = exports.PARCEL_MAP_CONFIG = exports.PARCEL_FILTERS_CONFIG = exports.PARCEL_PARAMS = undefined;
  var alias = Ember.computed.alias;
  exports.default = _emberData.default.Model.extend({
    // new attributes
    // parcel_id: DS.attr('string'),
    street_address: _emberData.default.attr('string'),
    property_for_sale: _emberData.default.attr('timeline'),
    property_for_lease: _emberData.default.attr('timeline'),
    listing_type: _emberData.default.attr('string'),
    invitation_to_connect: _emberData.default.attr('boolean'),
    invitation_to_connect_text: _emberData.default.attr('string'),
    realestate_contact_name: _emberData.default.attr('string'),
    realestate_contact_role: _emberData.default.attr('string'),
    realestate_contact_organization: _emberData.default.attr('string'),
    realestate_contact_phone: _emberData.default.attr('number'),
    realestate_contact_email: _emberData.default.attr('string'),
    realestate_contact_website: _emberData.default.attr('string'),
    year_built: _emberData.default.attr('number'),
    land_use: _emberData.default.attr('string'),
    ground_floor_vacancy_status: _emberData.default.attr('timeline'),
    upper_floor_vacancy_status: _emberData.default.attr('timeline'),
    assessed_value: _emberData.default.attr('timeline'),
    site_control: _emberData.default.attr('timeline'),
    engaged_owner: _emberData.default.attr('timeline'),
    owner_contact_name: _emberData.default.attr('string'),
    owner_contact_role: _emberData.default.attr('string'),
    owner_contact_org: _emberData.default.attr('string'),
    owner_contact_phone: _emberData.default.attr('number'),
    owner_contact_email: _emberData.default.attr('string'),
    owner_contact_website: _emberData.default.attr('string'),
    parcel_notes: _emberData.default.attr('string'),
    media_upload: _emberData.default.attr('string'),
    parcel_link1: _emberData.default.attr('string'),
    parcel_link1_description: _emberData.default.attr('string'),
    parcel_link2: _emberData.default.attr('string'),
    parcel_link2_description: _emberData.default.attr('string'),
    internal_parcel_notes: _emberData.default.attr('string'),
    // internal_parcel_media: DS.attr('file'), // need a transform for this
    featured_parcel_photo: _emberData.default.attr('string'),
    message_to_connect: _emberData.default.attr('string'),
    parcel_contact_name: _emberData.default.attr('string'),
    parcel_contact_role: _emberData.default.attr('string'),
    parcel_contact_org: _emberData.default.attr('string'),
    parcel_contact_email: _emberData.default.attr('string'),
    parcel_contact_phone: _emberData.default.attr('number'),
    parcel_contact_website: _emberData.default.attr('string'),
    geom: _emberData.default.attr(),

    // aliases
    is_engaged_owner: alias('engaged_owner'),

    // computeds
    assessed_value_d: Ember.computed('assessed_value', function () {
      var assessed_value_d = this.get('assessed_value.firstObject.value');
      return assessed_value_d;
    }),
    ground_floor_vacancy: Ember.computed('ground_floor_vacancy_status', function () {
      var ground_floor_vacancy_status = this.get('ground_floor_vacancy_status.firstObject.value');
      return ground_floor_vacancy_status;
    }),
    splash: Ember.computed('latitude,longitude', function () {
      var _getProperties = this.getProperties('latitude', 'longitude'),
          latitude = _getProperties.latitude,
          longitude = _getProperties.longitude;

      return 'https://maps.googleapis.com/maps/api/streetview?size=450x300&location=' + latitude + ',' + longitude + '&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps';
    }),
    property_for_sale_latest: Ember.computed('property_for_sale', function () {
      return this.get('property_for_sale.lastObject.value');
    }),
    property_for_lease_latest: Ember.computed('property_for_lease', function () {
      return this.get('property_for_lease.lastObject.value');
    }),
    latitude: Ember.computed('geojson', function () {
      var geojson = this.get('geojson');
      if (geojson.geometry) return L.geoJSON(geojson).getBounds().getCenter().lat;
      return this.get('city.latitude');
    }),
    longitude: Ember.computed('geojson', function () {
      var geojson = this.get('geojson');
      if (geojson.geometry) return L.geoJSON(geojson).getBounds().getCenter().lng;
      return this.get('city.latitude');
    }),
    geojson: Ember.computed('geom', function () {
      var geojson = Ember.Object.create();
      geojson.set('type', 'Feature');
      geojson.set('geometry', this.get('geom.geometry'));
      geojson.set('properties', this.getProperties('land_use', 'property_for_sale_latest', 'property_for_lease_latest'));

      return geojson;
    }),
    city: _emberData.default.belongsTo('city'),

    isSelected: false
  });


  // filter params
  var PARCEL_PARAMS = exports.PARCEL_PARAMS = ['landuseTypes', 'GFVacancyStatuses', 'UFVacancyStatuses', 'OwnershipTypes', 'groundFloorVacancyMin', 'groundFloorVacancyMax', 'landuseTypes', 'forSale', 'forLease', 'yearBuiltMin', 'yearBuiltMax', 'isEngagedOwner'];

  // dsl for filters
  var PARCEL_FILTERS_CONFIG = exports.PARCEL_FILTERS_CONFIG = [{
    property: 'land_use',
    filter: 'landuseTypesArray',
    filterType: 'isAny'
  },
  // {
  //   property: 'latest_ground_floor_vacancy',
  //   filter: 'GFVacancyStatusesArray',
  //   filterType: 'isAny'
  // },
  // {
  //   property: 'latest_upper_floor_vacancy',
  //   filter: 'UFVacancyStatusesArray',
  //   filterType: 'isAny'
  // },
  // {
  //   property: 'ownership_type',
  //   filter: 'OwnershipTypesArray',
  //   filterType: 'isAny'
  // },
  {
    property: 'property_for_sale_latest',
    filter: 'forSale',
    filterType: 'isTrue'
  },
  // {
  //   property: 'latest_is_engaged_owner',
  //   filter: 'isEngagedOwner',
  //   filterType: 'isTrue'
  // },
  {
    property: 'property_for_lease_latest',
    filter: 'forLease',
    filterType: 'isTrue'
  }];

  // choropleth config
  var PARCEL_MAP_CONFIG = exports.PARCEL_MAP_CONFIG = [{
    setName: 'Land Use',
    default_color: 'lightgray',
    colorMap: [{
      key: 'land_use',
      value: 'Residential',
      color: '#FFC800'
    }, {
      key: 'land_use',
      value: 'Commercial',
      color: '#B40028'
    }, {
      key: 'land_use',
      value: 'Industrial',
      color: '#A42E9F'
    }]
  }, {
    setName: 'Available Spaces',
    default_color: 'lightgray',
    colorMap: [{
      key: 'property_for_sale_latest',
      value: true,
      color: '#FCBE78'
    }, {
      key: 'property_for_lease_latest',
      value: true,
      color: '#58BC70'
    }]
  }];

  var PARCEL_OWNERSHIP_TYPES = exports.PARCEL_OWNERSHIP_TYPES = PARCEL_MAP_CONFIG.findBy('setName', 'Ownership Type');

  var PARCEL_TYPES = exports.PARCEL_TYPES = PARCEL_MAP_CONFIG.findBy('setName', 'Land Use');

  var GFVACANCY_STATUSES = exports.GFVACANCY_STATUSES = PARCEL_MAP_CONFIG.findBy('setName', 'Ground Floor Vacancy');

  var UFVACANCY_STATUSES = exports.UFVACANCY_STATUSES = PARCEL_MAP_CONFIG.findBy('setName', 'Upper Level Vacancy');
});
define('cityxcity/models/place', ['exports', 'ember-data', 'cityxcity/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FEATURE_FILTERS_CONFIG = exports.FEATURE_SUBTYPES = exports.FEATURE_TYPES = undefined;
  var alias = Ember.computed.alias;
  exports.default = _emberData.default.Model.extend({
    // new attributes
    // place_id: DS.attr('string'), // this is throwing ember off
    name: _emberData.default.attr('string'),
    latitude: _emberData.default.attr('number'),
    longitude: _emberData.default.attr('number'),
    location_type: _emberData.default.attr('string'),
    address: _emberData.default.attr('string'),
    description: _emberData.default.attr('string'),
    is_in_district: _emberData.default.attr('boolean'),
    type: _emberData.default.attr('string'),
    subtype: _emberData.default.attr('string'),
    status: _emberData.default.attr('timeline'),
    employment: _emberData.default.attr('timeline'),
    activating: _emberData.default.attr('timeline'),
    community_hub: _emberData.default.attr('timeline'),
    tdi_asset: _emberData.default.attr('timeline'),
    tdi_asset_start: _emberData.default.attr('date'),
    engaged_owner: _emberData.default.attr('timeline'),
    engaged_owner_start: _emberData.default.attr('date'),
    owner_name: _emberData.default.attr('string'),
    owner_title: _emberData.default.attr('string'),
    owner_org: _emberData.default.attr('string'),
    owner_phone: _emberData.default.attr('string'),
    owner_email: _emberData.default.attr('string'),
    owner_website: _emberData.default.attr('string'),
    notes: _emberData.default.attr('string'),
    file_upload: _emberData.default.attr('string'),
    link_description: _emberData.default.attr('string'),
    link_url: _emberData.default.attr('string'),
    internal_notes: _emberData.default.attr('string'),
    internal_files: _emberData.default.attr('string'),
    i2c_text: _emberData.default.attr('string'),
    pub_name: _emberData.default.attr('string'),
    pub_role: _emberData.default.attr('string'),
    pub_organization: _emberData.default.attr('string'),
    pub_phone: _emberData.default.attr('string'),
    pub_email: _emberData.default.attr('string'),
    pub_website: _emberData.default.attr('string'),
    related_places: _emberData.default.attr('string'),
    related_places_text: _emberData.default.attr('string'),
    related_investments_text: _emberData.default.attr('string'),

    // aliases
    feature_name: alias('name'),
    assetType: alias('type'),
    feature_type: alias('type'),

    // computeds
    is_employer: Ember.computed('employment', function () {
      return this.get('employment.firstObject.value');
    }),
    is_activating: Ember.computed('activating', function () {
      if (this.get('activating.firstObject.value') == true) {
        return 'Yes';
      } else {
        return 'No';
      }
    }),
    is_tdiasset: Ember.computed('tdi_asset', function () {
      if (this.get('tdi_asset.firstObject.value') == true) {
        return 'Yes';
      } else {
        return 'No';
      }
    }),
    is_engaged: Ember.computed('engaged_owner', function () {
      if (this.get('engaged_owner.firstObject.value') == true) {
        return 'Yes';
      } else {
        return 'No';
      }
    }),
    engaged_from: Ember.computed('engaged_owner', function () {
      if (this.get('engaged_owner.firstObject.value') == true) {
        return this.get('engaged_owner.firstObject.date');
      } else {
        return '';
      }
    }),
    more_info_link_url: Ember.computed('link_url', function () {
      return this.get('link_url');
    }),
    more_info_link_desc: Ember.computed('link_description', function () {
      return this.get('link_description');
    }),
    is_community_hub: Ember.computed('community_hub', function () {
      return this.get('community_hub.firstObject.value') == true;
    }),
    open_on: Ember.computed('status', function () {
      if (this.get('status.firstObject.value') == 'Open') {
        return this.get('status.firstObject.date');
      } else if (this.get('status.secondObject.value') == 'Open') {
        return this.get('status.secondObject.date');
      }
    }),
    close_on: Ember.computed('status', function () {
      if (this.get('status.firstObject.value') == 'Closed') {
        return this.get('status.firstObject.date');
      } else if (this.get('status.secondObject.value') == 'Closed') {
        return this.get('status.secondObject.date');
      }
    }),
    // this.get('city.latitude')
    iconUrl: Ember.computed('feature_type', function () {
      var featureType = this.get('feature_type').dasherize().replace('/', '');
      console.log(featureType);
      return (_environment.default.prepend ? _environment.default.prepend : '/') + 'images/icons/features/' + featureType + '.png';
    }),
    iconWatermarkUrl: Ember.computed('feature_type', function () {
      var featureType = this.get('feature_type').dasherize().replace('/', '');
      return (_environment.default.prepend ? _environment.default.prepend : '/') + 'images/icons/features/filters/' + featureType + '.png';
    }),
    investmentAmount: Ember.computed('investments.[]', function () {
      var investments_rel = this.get('investments').mapBy('estimated_amount');
      var amount_t = 0;
      investments_rel.forEach(function (ea) {
        if (ea) {
          amount_t = amount_t + ea;
        }
      });
      console.log("SDSDFSDFSSFDSCSDCSDD", investments_rel, amount_t);
      return amount_t;
    }),
    splash: Ember.computed('latitude,longitude', function () {
      var _getProperties = this.getProperties('latitude', 'longitude'),
          latitude = _getProperties.latitude,
          longitude = _getProperties.longitude;

      var featured_photo = this.get('featured_photo');
      return featured_photo || 'https://maps.googleapis.com/maps/api/streetview?size=450x300&location=' + latitude + ',' + longitude + '&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps';
    }),

    // relationships
    city: _emberData.default.belongsTo("city"),
    relatedPlaces: _emberData.default.hasMany('place', { inverse: 'relatedPlace' }),
    relatedFeature: _emberData.default.belongsTo('place', { inverse: 'relatedPlaces' }),
    relatedFeaturesDescription: _emberData.default.attr('string'),
    investments: _emberData.default.hasMany('investment'),
    relatedInvestmentsDescription: _emberData.default.attr('string'),

    // local state
    isSelected: false
  });


  // form / filter types
  var FEATURE_TYPES = exports.FEATURE_TYPES = ["Arts and Culture", "Civic Institution", "Education", "Food Sales", "Health Care", "Office", "Open Space", "Parking", "Public Transit", "Housing", "Retail", "Temporary", "Mixed-Use Development"];
  var FEATURE_SUBTYPES = exports.FEATURE_SUBTYPES = {
    "Food Sales": ["Coffee Shop", "Bar", "Specialty Food Sales", "Sit-down Restaurant", "Counter Service Restaurant", "Fast-Food Chain", "Grocery Store", "Farmer's Market", "Restaurant Incubator", "Regular Food Truck Hub"],
    "Office": ["General Office", "Corporation Headquarters", "Coworking Space"],
    "Retail": ["Convenience / Corner Store", "Specialty Retailer", "Department Store", "Discount Retailer", "Resale/Consignment", "Specialty Services", "Big Box Store", "Pharmacy", "Bank", "Indoor Recreation", "Automotive", "General Retail"],
    "Community": ["Non-Profit", "Groups or Associations", "Church", "Coworking Space"],
    "Arts and Culture": ["Performance Theatre", "Music Venue", "Movie Theatre", "Museum/Gallery", "Art Center/Production Space", "Community Gathering Space"],
    "Health Care": ["Specialty Health Services", "Medical Office", "Walk-in Clinic", "Hospital"],
    "Education": ["Pre-School or Early Education Center", "Public School", "Private School", "Vocational School", "College or University", "Supplemental Services"],
    "Civic Institution": ["Fire Department", "Library", "Police Department", "City Government", "Social Services", "Public Agency", "Community Group", "Post Office", "Court"],
    "Temporary": ["Retail", "Food Sales", "Workspace", "Event Location", "Park/Parklet", "Streetscape Improvements", "Other"],
    "Park / Open Space": ["Plaza", "Alleyway", "Pocket Park", "Park", "Trails and Greenways", "Community Garden / Farm", "Active Recreation Facility"],
    "Parking": ["Free Lot", "Paid Lot", "Paid Structure"],
    "Public Transit": ["Local/Regional Bus Stop", "Light Rail Station", "High-Speed Rail Station", "Transportation Center"],
    "Housing": ["Single Family", "2-4 units", "2-4 units, subsidized", "4-10 units", "4-10 units, subsidized", "10+ units", "10+ units, subsidized", "Assisted Living"]
  };

  // DSL for filter menus
  var FEATURE_FILTERS_CONFIG = exports.FEATURE_FILTERS_CONFIG = [{
    property: 'feature_type',
    filter: 'assetTypesArray',
    filterType: 'isAny'
  }, {
    property: 'is_activating',
    filter: 'activating',
    filterType: 'isTrue'
  }, {
    property: 'isOpen',
    filter: 'featureOpen',
    filterType: 'isTrue'
  }, {
    property: 'is_employer',
    filter: 'is_employer',
    filterType: 'isTrue'
  }, {
    property: 'tdi_asset',
    filter: 'tdi_asset',
    filterType: 'isTrue'
  }, {
    property: 'engaged_owner',
    filter: 'engaged_owner',
    filterType: 'isTrue'
  }, {
    property: 'is_community_hub',
    filter: 'community_hub',
    filterType: 'isTrue'
  }];
});
define('cityxcity/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    username: _emberData.default.attr('string'),
    avatar: _emberData.default.attr('string'),
    email: _emberData.default.attr('string'),
    password: _emberData.default.attr('string'),
    token: _emberData.default.attr('string')
  });
});
define('cityxcity/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('cityxcity/router', ['exports', 'cityxcity/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('cities', function () {
      this.route('city', { path: '/:city_id' }, function () {
        this.route('show');

        this.route('places', { path: '/places/:place_id' }, function () {});

        this.route('edit-place', { path: '/places/:place_id/edit' });

        this.route('parcels', { path: '/parcels/:parcel_id' });
        this.route('edit-parcel', { path: '/parcels/:parcel_id/edit' });

        this.route('investments', { path: '/investments/:investment_id' });
        this.route('edit-investment', { path: '/investments/:investment_id/edit' });
        // just have details view cover filters/list with CSS (position: absolute; left: 0;)

        this.route('new-place', { path: '/places/new' });
        this.route('new-investment', { path: '/investments/new' });

        // for edit, just have a component with an init that creates the map point through the service
        this.route('add-data', { path: 'add' });
      });
    });
    this.route('login');
  });

  exports.default = Router;
});
define('cityxcity/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    currentCity: Ember.inject.service(),
    model: function model() {
      return this.store.query('city', { exclude: 'investments,parcels,places' });
    }
  });
});
define('cityxcity/routes/cities', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.modelFor('application');
    }
  });
});
define('cityxcity/routes/cities/city', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    currentCity: Ember.inject.service(),
    model: function model(params) {
      var cities = this.modelFor('cities');
      var city = cities.findBy('id', params.city_id);

      return Ember.RSVP.hash({
        city: city,
        places: this.store.query('place', {
          city: city.get('name'),
          include: 'latitude,longitude,type,subtype,description,city,investments,employment,activating,community_hub,name,location_type'
        }),
        investments: this.store.query('investment', {
          city: city.get('name'),
          include: 'id,record_url,investment_id,source_type,place_id,city,use_type,investment_status,estimated_amount,investment_descriptor'
        }),
        parcels: this.store.query('parcel', {
          city: city.get('name'),
          include: 'parcel_id,street_address,year_built,land_use,city,property_for_lease,property_for_sale'
        })
      });
    },
    afterModel: function afterModel(model) {
      var currentCity = this.get('currentCity');
      currentCity.setCity(model.city);
      currentCity.setAllInvestments(model.investments);
    }
  });
});
define('cityxcity/routes/cities/city/add-data', ['exports', 'cityxcity/models/place'], function (exports, _place) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    currentCity: Ember.inject.service(),
    model: function model(params) {
      var city = this.modelFor('cities.city');
      return this.store.createRecord('place', {
        city: city.city
      });
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('currentCity', Ember.inject.service('currentCity'));
      controller.set('featureTypes', _place.FEATURE_TYPES);
    },


    actions: {
      associateInvestment: function associateInvestment(model) {
        model.get('investments').createRecord({});
      },
      didTransition: function didTransition() {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', true);
      },
      willTransition: function willTransition(transition) {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', false);
      },
      submitRoute: function submitRoute(object) {
        var _this = this;

        var currentCity = this.get('currentCity');

        object.setProperties({
          latitude: currentCity.get('newPointLatitude'),
          longitude: currentCity.get('newPointLongitude')
        });

        return object.save().then(function (model) {
          _this.transitionTo('cities.city.places', model);
        });
      }
    }
  });
});
define('cityxcity/routes/cities/city/edit-feature', ['exports', 'cityxcity/mixins/center-map-on-geometry'], function (exports, _centerMapOnGeometry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_centerMapOnGeometry.default, {});
});
define('cityxcity/routes/cities/city/edit-investment', ['exports', 'cityxcity/mixins/center-map-on-geometry'], function (exports, _centerMapOnGeometry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_centerMapOnGeometry.default, {});
});
define('cityxcity/routes/cities/city/investments', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('cityxcity/routes/cities/city/new-feature', ['exports', 'cityxcity/models/place'], function (exports, _place) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'cities/city/edit-place',
    currentCity: Ember.inject.service(),
    model: function model(params) {
      var city = this.modelFor('cities.city');
      return this.store.createRecord('place', {
        city: city.city
      });
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('currentCity', Ember.inject.service('currentCity'));
      controller.set('featureTypes', _place.FEATURE_TYPES);
    },


    actions: {
      didTransition: function didTransition() {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', true);
      },
      willTransition: function willTransition(transition) {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', false);
      },
      submitRoute: function submitRoute(object) {
        var _this = this;

        var currentCity = this.get('currentCity');

        object.setProperties({
          latitude: currentCity.get('newPointLatitude'),
          longitude: currentCity.get('newPointLongitude')
        });

        return object.save().then(function (model) {
          _this.transitionTo('cities.city.places', model);
        });
      }
    }
  });
});
define('cityxcity/routes/cities/city/new-investment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'cities/city/edit-investment',
    currentCity: Ember.inject.service(),
    model: function model(params) {
      var city = this.modelFor('cities.city');
      var currentCity = this.get('currentCity');

      return this.store.createRecord('investment', {
        city: city.city
      });
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('currentCity', Ember.inject.service('currentCity'));
    },


    actions: {
      didTransition: function didTransition() {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', true);
      },
      willTransition: function willTransition(transition) {
        var currentCity = this.get('currentCity');
        currentCity.set('isPlottingPoint', false);
      },
      submitRoute: function submitRoute(object) {
        var _this = this;

        var currentCity = this.get('currentCity');

        object.setProperties({
          latitude: currentCity.get('newPointLatitude'),
          longitude: currentCity.get('newPointLongitude')
        });

        return object.save().then(function (model) {
          _this.transitionTo('cities.city.investments', model);
        });
      }
    }
  });
});
define('cityxcity/routes/cities/city/parcels', ['exports', 'cityxcity/mixins/center-map-on-geometry'], function (exports, _centerMapOnGeometry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_centerMapOnGeometry.default, {});
});
define('cityxcity/routes/cities/city/places', ['exports', 'cityxcity/mixins/center-map-on-geometry'], function (exports, _centerMapOnGeometry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_centerMapOnGeometry.default, {});
});
define('cityxcity/routes/cities/city/places/index', ['exports', 'cityxcity/mixins/center-map-on-geometry'], function (exports, _centerMapOnGeometry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_centerMapOnGeometry.default, {});
});
define('cityxcity/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      if (requestType === 'query') {
        payload.forEach(function (record) {
          if (record.city) {
            record.city = record.city[0].id;
          }

          if (record.investments) {
            record.investments = record.investments.map(function (inv) {
              return inv.id;
            });
          }

          if (record.related_investments) {
            record.related_investments = record.related_investments.map(function (inv) {
              return inv.id;
            });
          }
        });
      }

      if (requestType === 'findRecord') {
        if (payload.city) {
          payload.city = payload.city[0].id;
        }

        if (payload.related_investments) {
          payload.related_investments = payload.related_investments.map(function (inv) {
            return inv.id;
          });
        }

        if (payload.related_features) {
          payload.related_features = payload.related_features.map(function (feat) {
            return feat.id;
          });
        }

        if (payload.investments) {
          payload.investments = payload.investments.map(function (inv) {
            return inv.id;
          });
        }
      }

      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('cityxcity/serializers/place', ['exports', 'cityxcity/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('cityxcity/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('cityxcity/services/current-city', ['exports', 'cityxcity/utils/apply-filter-to', 'cityxcity/utils/arrayify', 'cityxcity/models/place', 'cityxcity/models/investment', 'cityxcity/models/parcel'], function (exports, _applyFilterTo, _arrayify, _place, _investment, _parcel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var INVESTMENT_PARAMS = ['is_tdi_influenced', 'investmentTypesArray.[]', 'valueMin', 'valueMax', 'investmentStatuses', 'investmentSources', 'investments_fake_open_or_closed'];
  var FEATURE_PARAMS = ['assetTypesArray.[]', 'activating', 'isOpen', 'is_employer', 'tdi_asset', 'engaged_owner', 'community_hub'];

  var SOUTHWICK_LATITUDE = 42.1;
  var SOUTHWICK_LONGITUDE = -71.6;
  var DEFAULT_ZOOM = 17;

  exports.default = Ember.Service.extend({
    mapInstance: null,
    latitude: SOUTHWICK_LATITUDE,
    longitude: SOUTHWICK_LONGITUDE,
    zoom: DEFAULT_ZOOM,
    setCity: function setCity(city) {
      var _this = this;

      this.set('city', city);
      var latitude = city.get('latitude');
      var longitude = city.get('longitude');
      Ember.run.next(this, function () {
        _this.setProperties({
          latitude: latitude,
          longitude: longitude
        });
      });
    },
    setAllInvestments: function setAllInvestments(investments) {
      this.set('all_investments', investments);
    },

    city: '',
    all_investments: null,

    parcelChoroplethSets: _parcel.PARCEL_MAP_CONFIG.mapBy('setName'),
    parcelChoroplethConfig: _parcel.PARCEL_MAP_CONFIG,
    choroplethLayer: 'Land Use',
    landuseTypesArray: Ember.computed('landuseTypes', (0, _arrayify.default)('landuseTypes', '|')),
    landuseTypes: '',
    landuseTypeOptions: _parcel.PARCEL_TYPES,

    GFVacancyStatuses: '',
    GFVacancyStatusesArray: Ember.computed('GFVacancyStatuses', (0, _arrayify.default)('GFVacancyStatuses', '|')),
    GFVacancyStatusesOptions: _parcel.GFVACANCY_STATUSES,

    UFVacancyStatuses: '',
    UFVacancyStatusesArray: Ember.computed('UFVacancyStatuses', (0, _arrayify.default)('UFVacancyStatuses', '|')),
    UFVacancyStatusesOptions: _parcel.UFVACANCY_STATUSES,

    showInvestments: true,
    showPlaces: true,
    showParcels: false,

    assetTypes: _place.FEATURE_TYPES.join('|'),
    assetTypesArray: Ember.computed('assetTypes', (0, _arrayify.default)('assetTypes', '|')),
    assetTypeOptions: _place.FEATURE_TYPES,

    investmentTypes: _investment.INVESTMENT_TYPES.join('|'),
    investmentTypesArray: Ember.computed('investmentTypes', (0, _arrayify.default)('investmentTypes', '|')),
    investmentTypeOptions: _investment.INVESTMENT_TYPES,
    investmentStatuses: 'Completed',
    investmentStatusesArray: Ember.computed('investmentStatuses', (0, _arrayify.default)('investmentStatuses', '|')),
    investmentStatusesOptions: _investment.INVESTMENT_STATUSES,

    investmentSources: _investment.INVESTMENT_SOURCES.join('|'),
    investmentSourcesArray: Ember.computed('investmentSources', (0, _arrayify.default)('investmentSources', '|')),
    investmentSourcesOptions: _investment.INVESTMENT_SOURCES,

    isPlottingPoint: false,
    newPointLatitude: SOUTHWICK_LATITUDE,
    newPointLongitude: SOUTHWICK_LONGITUDE,
    visibleFeatures: Ember.computed.apply(undefined, FEATURE_PARAMS.concat(['city.places', (0, _applyFilterTo.default)('city.places', _place.FEATURE_FILTERS_CONFIG)])),

    visibleInvestments: Ember.computed.apply(undefined, INVESTMENT_PARAMS.concat(['city.investments', (0, _applyFilterTo.default)('city.investments', _investment.INVESTMENT_FILTERS_CONFIG)])),

    visibleParcels: Ember.computed.apply(undefined, _toConsumableArray(_parcel.PARCEL_PARAMS).concat(['city.parcels', (0, _applyFilterTo.default)('city.parcels', _parcel.PARCEL_FILTERS_CONFIG)]))
  });
});
define('cityxcity/services/scroller', ['exports', 'ember-scroll-to/services/scroller'], function (exports, _scroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scroller.default;
    }
  });
});
define("cityxcity/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XJTevv1f", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"box\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row header\"],[7],[0,\"\\n    \"],[1,[25,\"main-nav\",null,[[\"model\"],[[19,0,[\"model\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/application.hbs" } });
});
define("cityxcity/templates/cities", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "H6OEj2+p", "block": "{\"symbols\":[],\"statements\":[[6,\"main\"],[9,\"class\",\"row content\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"column-structure sidebar\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"column-structure\"],[7],[0,\"\\n    \"],[1,[25,\"main-map\",null,[[\"model\"],[[19,0,[\"model\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[1,[25,\"export-data\",null,[[\"isExporting\",\"export_csv\"],[[19,0,[\"isExporting\"]],[25,\"action\",[[19,0,[]],\"export_csv\"],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row footer\"],[7],[0,\"\\n  \"],[1,[18,\"footer-nav\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities.hbs" } });
});
define("cityxcity/templates/cities/city", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ETr1qK01", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"search-bar\",null,[[\"model\",\"handleClick\"],[[19,0,[\"model\",\"places\"]],[25,\"action\",[[19,0,[]],\"showPlace\"],null]]]],false],[0,\" \\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city.hbs" } });
});
define("cityxcity/templates/cities/city/add-data", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dRjhzKkT", "block": "{\"symbols\":[\"field\",\"investment\",\"subtype\",\"type\",\"type\"],\"statements\":[[6,\"div\"],[9,\"class\",\"edit-mode\"],[7],[0,\"\\n\"],[0,\"    \"],[6,\"div\"],[9,\"class\",\"features\"],[7],[0,\"\\n    \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"class\",\"ui circular image\"],[10,\"src\",[20,[\"model\",\"splash\"]],null],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[1,[25,\"if\",[[19,0,[\"model\",\"feature_name\"]],[19,0,[\"model\",\"feature_name\"]],\"Add Data\"],null],false],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"feature_type\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"edit-resource\",null,[[\"model\"],[[19,0,[\"model\"]]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Add Point\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[0,\"Please drag the map to locate your point. Please note, you cannot move the point after data has been saved.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        What type of location is your data related to?\\n      \"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"fluid selection field\",[19,0,[\"model\",\"location_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"location_type\"]]],null]],null]]],{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Street Address\"],[8],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"Street Address\",\"Describable Location\",\"District-wide\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,5,[]]]]],[7],[0,\"\\n              \"],[1,[19,5,[]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"liquid-if\",[[25,\"eq\",[[19,0,[\"model\",\"location_type\"]],\"Street Address\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Address\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"address\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Describe the location (street intersection, etc.)\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"non_addressy_location\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Is this point in the TDI district?\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n          \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",[25,\"if\",[[19,0,[\"model\",\"in_district\"]],\"Yes\",\"No\"],null],[19,0,[\"model\",\"in_district\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"in_district\"]]],null]],null]]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"h1\"],[9,\"class\",\"tdi-semi-bold header\"],[7],[0,\"\\n        Place Information\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Please add a name for this place.\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"feature_name\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        What type of place is this?\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"feature_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"feature_type\"]]],null]],null]]],{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the feature type\"],[8],[0,\"\\n          \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"assetTypes\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,4,[]]]]],[7],[0,\"\\n                \"],[1,[19,4,[]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"model\",\"feature_type\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Please select a subtype.\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Select the feature sub-type\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"subtype\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"subtype\"]]],null]],null]]],{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the feature sub-type\"],[8],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"get\",[[19,1,[\"assetSubTypes\"]],[19,0,[\"model\",\"feature_type\"]]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,3,[]]]]],[7],[0,\"\\n                  \"],[1,[19,3,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Add the operational status.\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n        \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"open_or_closed\"]],[25,\"array\",[\"Proposed\",\"In Progress\",\"Open\",\"Closed\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"ui labeled icon primary fluid button\"],[10,\"onclick\",[25,\"route-action\",[\"submitRoute\",[19,0,[\"model\"]]],null],null],[7],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",[26,[[25,\"if\",[[19,0,[\"model\",\"hasDirtyAttributes\"]],\"green\",\"black\"],null],\" \",[25,\"if\",[[19,0,[\"model\",\"isSaving\"]],\"loading spinner icon\",\"save icon\"],null]]]],[7],[8],[0,\"\\n        Save\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"h1\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Investment Information\\n      \"],[8],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\",\"investments\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"new-investment-form\",null,[[\"model\"],[[19,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"ui neutral header\"],[7],[0,\"\\n          No associated investment information. Add more below:\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui fluid primary button\"],[3,\"action\",[[19,0,[]],\"associateInvestment\",[19,0,[\"model\"]]]],[7],[0,\"\\n        Add investment information\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"ui labeled icon primary fluid button\"],[10,\"onclick\",[25,\"route-action\",[\"submitRoute\",[19,0,[\"model\"]]],null],null],[7],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",[26,[[25,\"if\",[[19,0,[\"model\",\"hasDirtyAttributes\"]],\"green\",\"black\"],null],\" \",[25,\"if\",[[19,0,[\"model\",\"isSaving\"]],\"loading spinner icon\",\"save icon\"],null]]]],[7],[8],[0,\"\\n        Save\\n      \"],[8],[0,\"\\n\"],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/add-data.hbs" } });
});
define("cityxcity/templates/cities/city/edit-investment", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pRQZ2Dmi", "block": "{\"symbols\":[\"currentModel\",\"field\",\"type\",\"field\",\"field\",\"field\",\"type\",\"type\"],\"statements\":[[6,\"div\"],[9,\"class\",\"edit-mode\"],[7],[0,\"\\n\"],[4,\"liquid-bind\",[[19,0,[\"model\"]]],[[\"use\",\"class\"],[\"toLeft\",\"investments\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"investments\"],[7],[0,\"\\n      \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"dollar icon\"],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n          \"],[1,[20,[\"model\",\"project\"]],false],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"type\"]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n\"],[4,\"edit-resource\",null,[[\"model\"],[[19,0,[\"model\"]]]],{\"statements\":[[0,\"        \"],[6,\"form\"],[9,\"class\",\"ui form\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Add Investment\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Add project name\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"project\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Location\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this feature locatable at a single address or small range of addresses?\",[19,0,[\"model\",\"is_addressy\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_addressy\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"is_addressy\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Address Number\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"address_number\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Street Name\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"street_name\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Street Suffix\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"street_suffix\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Describe the location (street intersection, etc.)\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"non_addressy_location\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Attributes\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Add an investment status as needed.\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"investment_status\"]],[25,\"array\",[\"Proposed\",\"In Progress\",\"Completed\",\"Failed\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Which type of investment is this?\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"investment_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"investment_type\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the investment type\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,2,[\"investmentTypes\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,8,[]]]]],[7],[0,\"\\n                    \"],[1,[19,8,[]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Select the source of funding for this project.\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"source_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"source_type\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the investment soiurce\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,2,[\"investmentSources\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,7,[]]]]],[7],[0,\"\\n                    \"],[1,[19,7,[]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"],[4,\"liquid-if\",[[25,\"eq\",[[19,0,[\"model\",\"source_type\"]],\"MassDevelopment\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Investment Products\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"product_massdev\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this investment influenced by the TDI program?\",[19,0,[\"model\",\"is_tdi_influenced\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_tdi_influenced\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is the investment amount known or can it be estimated?\",[19,0,[\"model\",\"is_amount_known\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_amount_known\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this investment amount estimated?\",[19,0,[\"model\",\"is_amount_estimated\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_amount_estimated\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"model\",\"is_amount_estimated\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Enter an estimated investment amount (numbers only).\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"amount_estimated\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[0,\"Enter the exact investment amount.\"],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"amount_exact\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Can the investment amount be publicly shared?\",[19,0,[\"model\",\"is_amount_public\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_amount_public\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Documents and Links\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Add an illustrative photo of this feature.\"],[8],[0,\"\\n            \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Add any related documents. These are publicly visible.\"],[8],[0,\"\\n            \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Add any related documents. These are not publicly visible.\"],[8],[0,\"\\n            \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Enter the URL for any related website.\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"related_link_url\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Enter a label for this related website.\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"related_link_title\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Related Places and Investments\\n          \"],[8],[0,\"\\n\\n          \"],[1,[25,\"select-association\",null,[[\"selected\",\"modelName\",\"placeholder\",\"searchField\"],[[19,0,[\"model\",\"places\"]],\"feature\",\"Search for a feature\",\"feature_name\"]]],false],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[1,[25,\"textarea\",null,[[\"value\",\"placeholder\"],[[19,0,[\"model\",\"relatedFeaturesDescription\"]],\"Describe these relationships a bit\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[1,[25,\"select-association\",null,[[\"selected\",\"modelName\",\"placeholder\",\"searchField\"],[[19,0,[\"model\",\"relatedInvestments\"]],\"investment\",\"Search for an investment\",\"project\"]]],false],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[1,[25,\"textarea\",null,[[\"value\",\"placeholder\"],[[19,0,[\"model\",\"relatedInvestmentsDescription\"]],\"Describe these relationships a bit\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Contacts\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Private Contact Name\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"priv_contact_name\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"priv_contact_name\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"priv_contact_organization\",\"priv_contact_role\",\"priv_contact_phone\",\"priv_contact_email\",\"priv_contact_website\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[19,6,[]],\"priv\",\"\"],null]],null],false],[8],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,6,[]]],null]]]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Public Contact Name\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_1\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n     \\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_1\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_1\",\"pub_contact_role_1\",\"pub_contact_phone_1\",\"pub_contact_email_1\",\"pub_contact_website_1\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,5,[]],\"pub\",\"\"],null],\"_1\",\"\"],null]],null],false],[8],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,5,[]]],null]]]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Public Contact Name (2)\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_2\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_2\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_2\",\"pub_contact_role_2\",\"pub_contact_phone_2\",\"pub_contact_email_2\",\"pub_contact_website_2\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,4,[]],\"pub\",\"\"],null],\"_2\",\"\"],null]],null],false],[8],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,4,[]]],null]]]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            How To Get Involved\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Write new \\\"How To Get Involved\\\" text if you wish to override the default text for this feature.\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"cta_text\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Select the contact revealed when a user clicks this feature's \\\"How To Get Involved\\\" button.\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"cta_contact\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"cta_contact\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[9,\"data-value\",\"\"],[7],[0,\"Select One\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"District Default Contact\",\"Public Contact 1\",\"Public Contact 2\"],null]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,3,[]]]]],[7],[0,\"\\n                    \"],[1,[19,3,[]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/edit-investment.hbs" } });
});
define("cityxcity/templates/cities/city/edit-parcel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CEk0EwtC", "block": "{\"symbols\":[\"currentModel\",\"field\",\"type\",\"field\",\"field\",\"field\",\"type\",\"type\"],\"statements\":[[6,\"div\"],[9,\"class\",\"edit-mode\"],[7],[0,\"\\n\"],[4,\"liquid-bind\",[[19,0,[\"model\"]]],[[\"use\",\"class\"],[\"toLeft\",\"parcels\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"parcels\"],[7],[0,\"\\n      \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n        \"],[6,\"img\"],[9,\"class\",\"ui bordered circular image\"],[10,\"src\",[20,[\"model\",\"splash\"]],null],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n          \"],[1,[20,[\"model\",\"address\"]],false],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"land_use\"]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n\"],[4,\"edit-resource\",null,[[\"model\"],[[19,0,[\"model\"]]]],{\"statements\":[[0,\"        \"],[6,\"form\"],[9,\"class\",\"ui form\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"What kind of entity owns this parcel?\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"ownership_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"ownership_type\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the parcel ownership type\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,2,[\"parcelOwnershipTypes\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,8,[]]]]],[7],[0,\"\\n                    \"],[1,[19,8,[]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Is the owner of this parcel engaged with the TDI program or other community activities?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"is_engaged_owner\"]],[25,\"array\",[\"yes\",\"no\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Is this parcel for sale?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"is_for_sale\"]],[25,\"array\",[\"yes\",\"no\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Is this parcel for lease?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"is_for_lease\"]],[25,\"array\",[\"yes\",\"no\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Is this parcel a vacant lot (i.e., it has no structures on it)?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"is_vacant_lot\"]],[25,\"array\",[\"yes\",\"no\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Is the ground floor of this parcel's building(s) vacant?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"ground_floor_vacancy\"]],[25,\"array\",[\"Not Vacant\",\"Partially Vacant\",\"Entirely Vacant\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Are the upper floors of this parcel's building(s) vacant?\"],[8],[0,\"\\n            \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"upper_floor_vacancy\"]],[25,\"array\",[\"Not Vacant\",\"Partially Vacant\",\"Entirely Vacant\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n            Assessing Info\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Land Use\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"land_use\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"land_use\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the feature type\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"1\",\"3\",\"4\",\"9\"],null]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,7,[]]]]],[7],[0,\"\\n                    \"],[1,[25,\"if\",[[25,\"eq\",[[19,7,[]],\"1\"],null],\"Residential\",[25,\"if\",[[25,\"eq\",[[19,7,[]],\"3\"],null],\"Commercial\",[25,\"if\",[[25,\"eq\",[[19,7,[]],\"4\"],null],\"Industrial\",[25,\"if\",[[25,\"eq\",[[19,7,[]],\"9\"],null],\"Public\"],null]],null]],null]],null],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Contacts\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Private Contact Name\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"priv_contact_name\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"priv_contact_name\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"priv_contact_organization\",\"priv_contact_role\",\"priv_contact_phone\",\"priv_contact_email\",\"priv_contact_website\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[19,6,[]],\"priv\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,6,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Public Contact Name\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_1\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n   \\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_1\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_1\",\"pub_contact_role_1\",\"pub_contact_phone_1\",\"pub_contact_email_1\",\"pub_contact_website_1\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,5,[]],\"pub\",\"\"],null],\"_1\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,5,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Public Contact Name (2)\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_2\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_2\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_2\",\"pub_contact_role_2\",\"pub_contact_phone_2\",\"pub_contact_email_2\",\"pub_contact_website_2\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,4,[]],\"pub\",\"\"],null],\"_2\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,4,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          How To Get Involved\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Write new \\\"How To Get Involved\\\" text if you wish to override the default text for this feature.\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"cta_text\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Select the contact revealed when a user clicks this feature's \\\"How To Get Involved\\\" button.\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"cta_contact\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"cta_contact\"]]],null]],null]]],{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"default text\"],[9,\"data-value\",\"\"],[7],[0,\"Select One\"],[8],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"District Default Contact\",\"Public Contact 1\",\"Public Contact 2\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,3,[]]]]],[7],[0,\"\\n                  \"],[1,[19,3,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/edit-parcel.hbs" } });
});
define("cityxcity/templates/cities/city/edit-place", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vC4O3mJ/", "block": "{\"symbols\":[\"currentModel\",\"field\",\"type\",\"field\",\"field\",\"field\",\"subtype\",\"type\"],\"statements\":[[6,\"div\"],[9,\"class\",\"edit-mode\"],[7],[0,\"\\n\"],[4,\"liquid-bind\",[[19,0,[\"model\"]]],[[\"use\",\"class\"],[\"toLeft\",\"features\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"features\"],[7],[0,\"\\n    \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"class\",\"ui circular image\"],[10,\"src\",[20,[\"model\",\"splash\"]],null],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[1,[20,[\"model\",\"feature_name\"]],false],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"feature_type\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"edit-resource\",null,[[\"model\"],[[19,0,[\"model\"]]]],{\"statements\":[[0,\"      \"],[6,\"form\"],[9,\"class\",\"ui form\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Add Place\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Add feature name\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"feature_name\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Location\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n            \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this feature locatable at a single address or small range of addresses?\",[19,0,[\"model\",\"is_addressy\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_addressy\"]]],null]],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"is_addressy\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Address Number\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"address_number\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Street Name\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"street_name\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Street Suffix\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"street_suffix\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Describe the location (street intersection, etc.)\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"non_addressy_location\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Attributes\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Select the feature type\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"feature_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"feature_type\"]]],null]],null]]],{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the feature type\"],[8],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,2,[\"assetTypes\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,8,[]]]]],[7],[0,\"\\n                  \"],[1,[19,8,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"model\",\"feature_type\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"label\"],[7],[0,\"Select the feature sub-type\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"subtype\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"subtype\"]]],null]],null]]],{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select the feature sub-type\"],[8],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"get\",[[19,2,[\"assetSubTypes\"]],[19,0,[\"model\",\"feature_type\"]]],null]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,7,[]]]]],[7],[0,\"\\n                    \"],[1,[19,7,[]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Add an open or close date as needed.\"],[8],[0,\"\\n          \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"open_or_closed\"]],[25,\"array\",[\"open\",\"closed\"],null]]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n            \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this feature an employer?\",[19,0,[\"model\",\"employer\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"employer\"]]],null]],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n            \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Does this feature activate the street nearby?\",[19,0,[\"model\",\"activating\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"activating\"]]],null]],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n            \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Does this feature contribute to the goals of the TDI program?\",[19,0,[\"model\",\"is_tdi_asset\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_tdi_asset\"]]],null]],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui checkbox\"],[7],[0,\"\\n            \"],[1,[25,\"ui-checkbox\",null,[[\"class\",\"label\",\"checked\",\"onChange\"],[\"toggle\",\"Is this feature a community hub for members of the community?\",[19,0,[\"model\",\"is_collision_point\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"is_collision_point\"]]],null]],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Documents and Links\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Add an illustrative photo of this feature.\"],[8],[0,\"\\n          \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Add any related documents. These are publicly visible.\"],[8],[0,\"\\n          \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Add any related documents. These are not publicly visible.\"],[8],[0,\"\\n          \"],[1,[18,\"file-field-progress\"],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Enter the URL for any related website.\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"related_link_url\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Enter a label for this related website.\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"related_link_title\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Related Places and Investments\\n        \"],[8],[0,\"\\n\\n        \"],[1,[25,\"select-association\",null,[[\"selected\",\"modelName\",\"placeholder\",\"searchField\"],[[19,0,[\"model\",\"investments\"]],\"investment\",\"Search for an investment\",\"project\"]]],false],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[1,[25,\"textarea\",null,[[\"value\",\"placeholder\"],[[19,0,[\"model\",\"relatedInvestmentsDescription\"]],\"Describe these relationships a bit\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[1,[25,\"select-association\",null,[[\"selected\",\"modelName\",\"placeholder\",\"searchField\"],[[19,0,[\"model\",\"relatedPlaces\"]],\"feature\",\"Search for a feature\",\"feature_name\"]]],false],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[1,[25,\"textarea\",null,[[\"value\",\"placeholder\"],[[19,0,[\"model\",\"relatedFeaturesDescription\"]],\"Describe these relationships a bit\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          Contacts\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Private Contact Name\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"priv_contact_name\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"priv_contact_name\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"priv_contact_organization\",\"priv_contact_role\",\"priv_contact_phone\",\"priv_contact_email\",\"priv_contact_website\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[19,6,[]],\"priv\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,6,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Public Contact Name\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_1\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n   \\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_1\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_1\",\"pub_contact_role_1\",\"pub_contact_phone_1\",\"pub_contact_email_1\",\"pub_contact_website_1\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,5,[]],\"pub\",\"\"],null],\"_1\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,5,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Public Contact Name (2)\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"pub_contact_2\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"liquid-if\",[[19,0,[\"model\",\"pub_contact_2\"]]],null,{\"statements\":[[4,\"each\",[[25,\"array\",[\"pub_contact_org_2\",\"pub_contact_role_2\",\"pub_contact_phone_2\",\"pub_contact_email_2\",\"pub_contact_website_2\"],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n              \"],[6,\"label\"],[7],[1,[25,\"humanize-string\",[[25,\"replace-with\",[[25,\"replace-with\",[[19,4,[]],\"pub\",\"\"],null],\"_2\",\"\"],null]],null],false],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[25,\"get\",[[19,0,[\"model\"]],[19,4,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n          How To Get Involved\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Write new \\\"How To Get Involved\\\" text if you wish to override the default text for this feature.\"],[8],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"cta_text\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Select the contact revealed when a user clicks this feature's \\\"How To Get Involved\\\" button.\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"cta_contact\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"cta_contact\"]]],null]],null]]],{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"default text\"],[9,\"data-value\",\"\"],[7],[0,\"Select One\"],[8],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"District Default Contact\",\"Public Contact 1\",\"Public Contact 2\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,3,[]]]]],[7],[0,\"\\n                  \"],[1,[19,3,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/edit-place.hbs" } });
});
define("cityxcity/templates/cities/city/features/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wl5UN3X0", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/features/index.hbs" } });
});
define("cityxcity/templates/cities/city/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CptSsp1V", "block": "{\"symbols\":[],\"statements\":[[0,\"To learn more about\\n\"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[1,[20,[\"model\",\"city\",\"name\"]],false],[8],[0,\"\\ncontact district manager \"],[1,[20,[\"model\",\"city\",\"cta_contact\"]],false],[0,\" at \"],[1,[20,[\"model\",\"city\",\"cta_contact_email\"]],false],[0,\".\\n\"],[6,\"p\"],[7],[0,\"\\n  \"],[1,[20,[\"model\",\"city\",\"cta_text\"]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/index.hbs" } });
});
define("cityxcity/templates/cities/city/investments", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w1pu6Gtm", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"investment-view\"],[7],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"ui image\"],[10,\"src\",[20,[\"model\",\"iconUrl\"]],null],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n      \"],[1,[20,[\"model\",\"project\"]],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"investment_type\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[25,\"investment-accord\",null,[[\"sourceType\",\"investmentType\",\"estAmount\",\"investmentStatus\",\"exacAmount\",\"contactType\",\"contactName\",\"contactRole\",\"contactOrg\",\"projectName\"],[[19,0,[\"model\",\"source_type\"]],[19,0,[\"model\",\"investment_type\"]],[19,0,[\"model\",\"estimated_amount\"]],[19,0,[\"model\",\"investment_status_val\"]],[19,0,[\"model\",\"exact_amount\"]],[19,0,[\"model\",\"contact_type\"]],[19,0,[\"model\",\"inv_contact_name\"]],[19,0,[\"model\",\"inv_contact_role\"]],[19,0,[\"model\",\"inv_contact_org\"]],[19,0,[\"model\",\"project_name\"]]]]],false],[0,\"\\n  \"],[2,\" <p>exact amount</p> \"],[0,\"\\n\\n  \"],[2,\" {{get model 'exact_amount'}} \"],[0,\"\\n  \"],[2,\" {{enumerate-properties\\n    model=model\\n    properties=(array 'project' 'address' 'non_addressy_location' 'source_type' 'is_tdi_influenced' 'investment_type' 'product_massdev' 'product_public' 'product_private' 'is_amount_known' 'is_amount_estimated' 'is_amount_public' 'amount_exact' 'amount_estimated' 'investment_status' 'is_close_date_approx' 'featured_photo' 'pub_docs' 'related_link_title' 'related_link_url' 'related_features' 'related_investments' 'relation_notes' 'pub_notes' 'cta_text' 'cta_contact' 'pub_contact_1' 'pub_contact_org_1' 'pub_contact_role_1' 'pub_contact_phone_1' 'pub_contact_email_1' 'pub_contact_website_1' 'pub_contact_2' 'pub_contact_org_2' 'pub_contact_role_2' 'pub_contact_phone_2' 'pub_contact_email_2' 'pub_contact_website_2'\\n  )}} \"],[0,\"\\n\\n  \"],[6,\"h3\"],[7],[0,\"Related\"],[8],[0,\"\\n  \"],[1,[25,\"tabbed-results\",null,[[\"visibleInvestments\",\"showInvestments\",\"visibleFeatures\",\"showFeatures\"],[[19,0,[\"model\",\"relatedInvestments\"]],true,[19,0,[\"model\",\"places\"]],true]]],false],[0,\"\\n\\n  \"],[1,[25,\"resource-nav-menu\",null,[[\"session\",\"routeSegment\",\"model\"],[[19,0,[\"session\"]],\"edit-investment\",[19,0,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/investments.hbs" } });
});
define("cityxcity/templates/cities/city/new-feature", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dMDKaIss", "block": "{\"symbols\":[\"field\"],\"statements\":[[6,\"div\"],[9,\"class\",\"investments\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"ui circular image\"],[10,\"src\",[26,[\"https://maps.googleapis.com/maps/api/streetview?size=450x450&location=\",[20,[\"currentCity\",\"selectedPointLatitude\"]],\",\",[20,[\"currentCity\",\"selectedPointLongitude\"]],\"&key=AIzaSyCO654zBIabvjSOV4Ys59Pku8pmzM387ps\"]]],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n      \"],[1,[25,\"if\",[[19,0,[\"model\",\"name\"]],[19,0,[\"model\",\"name\"]],\"Create New Place\"],null],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"assetType\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"edit-resource\",null,[[\"model\",\"submitRoute\"],[[19,0,[\"model\"]],[25,\"route-action\",[\"submitRoute\"],null]]],{\"statements\":[[0,\"  \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"name\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"address\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"contact\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"form\",\"checkbox-field\"]],\"employer\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"form\",\"checkbox-field\"]],\"activating\"],null],false],[0,\"\\n\\n\"],[0,\"  \"],[1,[25,\"component\",[[19,1,[\"form\",\"select-field\"]],\"assetType\",[19,1,[\"assetTypes\"]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/new-feature.hbs" } });
});
define("cityxcity/templates/cities/city/new-investment", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "O0roMCWY", "block": "{\"symbols\":[\"field\"],\"statements\":[[6,\"div\"],[9,\"class\",\"investments\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n    \"],[6,\"i\"],[9,\"class\",\"dollar icon\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n      \"],[1,[25,\"if\",[[19,0,[\"model\",\"name\"]],[19,0,[\"model\",\"name\"]],\"Create New Investment\"],null],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"assetType\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"edit-resource\",null,[[\"model\",\"submitRoute\"],[[19,0,[\"model\"]],[25,\"route-action\",[\"submitRoute\"],null]]],{\"statements\":[[0,\"    \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"name\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"address\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"contact\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"form\",\"checkbox-field\"]],\"activating\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"form\",\"text-field\"]],\"value\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"form\",\"select-field\"]],\"type\",[19,1,[\"investmentTypes\"]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/new-investment.hbs" } });
});
define("cityxcity/templates/cities/city/parcels", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OQ77mX3i", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"parcel-view\"],[7],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"parcels\"],[7],[0,\"\\n    \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"class\",\"ui bordered circular image\"],[9,\"style\",\"min-height: 60px;\"],[10,\"src\",[20,[\"model\",\"splash\"]],null],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[1,[20,[\"model\",\"name\"]],false],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"type\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[25,\"parcel-accord\",null,[[\"streetAddress\",\"yearBuilt\",\"gFloorVacancy\",\"assessedValue\",\"landUse\",\"useType\"],[[19,0,[\"model\",\"street_address\"]],[19,0,[\"model\",\"year_built\"]],[19,0,[\"model\",\"ground_floor_vacancy\"]],[19,0,[\"model\",\"assessed_value_d\"]],[19,0,[\"model\",\"land_use\"]],[19,0,[\"model\",\"use_type\"]]]]],false],[0,\"\\n    \"],[2,\" {{enumerate-properties\\n      model=model\\n      properties=(array 'name' 'value' 'contact' 'employer' 'activating' 'assetType' 'subtype' 'comment' 'opendate' 'closedate' 'ownership_type' 'is_engaged_owner' 'land_use' 'zoning' 'parcel_id' 'is_for_sale' 'is_for_lease' 'year_built' 'is_vacant_lot' 'vacancy' 'ground_floor_vacancy' 'upper_floor_vacancy' 'own_contact_name' 'own_contact_role' 'own_contact_organization' 'own_contact_phone' 'own_contact_email' 'pub_notes' 'cta_text' 'cta_contact' 'pub_contact_1' 'pub_contact_org_1' 'pub_contact_role_1' 'pub_contact_phone_1' 'pub_contact_email_1' 'pub_contact_website_1' 'pub_contact_2' 'pub_contact_org_2' 'pub_contact_role_2' 'pub_contact_phone_2' 'pub_contact_email_2' 'pub_contact_website_2'\\n    )}} \"],[0,\"\\n    \"],[1,[25,\"resource-nav-menu\",null,[[\"session\",\"routeSegment\",\"model\"],[[19,0,[\"session\"]],\"edit-parcel\",[19,0,[\"model\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/parcels.hbs" } });
});
define("cityxcity/templates/cities/city/places", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TA8PCZhC", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"place-view\"],[7],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"ui circular image\"],[9,\"style\",\"min-height: 60px;\"],[10,\"src\",[20,[\"model\",\"splash\"]],null],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n      \"],[1,[20,[\"model\",\"feature_name\"]],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[1,[20,[\"model\",\"feature_type\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"\\n      Want to learn more about \"],[1,[25,\"if\",[[19,0,[\"model\",\"feature_name\"]],[19,0,[\"model\",\"feature_name\"]],\"this place\"],null],false],[0,\"?\\n    \"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"model\",\"cta_contact\"]]],null,{\"statements\":[[0,\"      Contact \"],[1,[20,[\"model\",\"cta_contact\"]],false],[0,\".\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      Contact MassDevelopment.\\n\"]],\"parameters\":[]}],[0,\"    \"],[6,\"p\"],[7],[0,\"\\n      \"],[1,[20,[\"model\",\"cta_text\"]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[2,\" {{enumerate-properties\\n    model=model\\n    properties=(array 'address'  'non_addressy_location'  'feature_type'  'feature_subtype'  'is_employer'  'is_street_activating'   'featured_photo'  'pub_docs'  'priv_docs'  'related_link_title'  'related_link_url'  'related_features'  'related_investments'  'relation_notes'  'pub_notes'  'cta_text'  'cta_contact'  'pub_contact_1'  'pub_contact_org_1'  'pub_contact_role_1'  'pub_contact_phone_1'  'pub_contact_email_1'  'pub_contact_website_1'  'pub_contact_2'  'pub_contact_org_2'  'pub_contact_role_2'  'pub_contact_phone_2'  'pub_contact_email_2'  'pub_contact_website_2'  'is_collision_point' 'open_or_closed')}}\\n\\n      <div class=\\\"sub header\\\">{{model.feature_type}}</div> \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Feature Name\"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n    \"],[1,[20,[\"model\",\"feature_name\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\\n  \"],[1,[25,\"place-accord\",null,[[\"streetAddress\",\"nonAddressyLocation\",\"investmentsRel\",\"featureStart\",\"featureType\",\"featureSubType\",\"status\",\"open_on\",\"close_on\",\"amountInvestments\",\"is_employer\",\"isActivating\",\"isContributing\",\"isEngaged\",\"engagedFrom\",\"moreInfoLinkUrl\",\"moreInfoLinkDesc\",\"contactName\",\"contactTitle\",\"notes\",\"ownerPhone\",\"ownerEmail\",\"relDocument\",\"model\"],[[19,0,[\"model\",\"address\"]],[19,0,[\"model\",\"non_addressy_location\"]],[19,0,[\"model\",\"investmentAmount\"]],[19,0,[\"model\",\"tdi_asset_start\"]],[19,0,[\"model\",\"type\"]],[19,0,[\"model\",\"subtype\"]],[19,0,[\"model\",\"status\"]],[19,0,[\"model\",\"open_on\"]],[19,0,[\"model\",\"close_on\"]],[19,0,[\"totalInvestments\"]],[19,0,[\"model\",\"is_employer\"]],[19,0,[\"model\",\"is_activating\"]],[19,0,[\"model\",\"is_tdiasset\"]],[19,0,[\"model\",\"is_engaged\"]],[19,0,[\"model\",\"engaged_from\"]],[19,0,[\"model\",\"more_info_link_url\"]],[19,0,[\"model\",\"more_info_link_desc\"]],[19,0,[\"model\",\"owner_name\"]],[19,0,[\"model\",\"owner_title\"]],[19,0,[\"model\",\"notes\"]],[19,0,[\"model\",\"owner_phone\"]],[19,0,[\"model\",\"owner_email\"]],[19,0,[\"model\",\"file_upload\"]],[19,0,[\"model\"]]]]],false],[0,\"\\n\\n  \"],[6,\"h3\"],[7],[0,\"Related\"],[8],[0,\"\\n\\n  \"],[1,[25,\"tabbed-results\",null,[[\"visibleInvestments\",\"showInvestments\",\"visibleFeatures\",\"showFeatures\"],[[19,0,[\"model\",\"investments\"]],true,[19,0,[\"model\",\"relatedFeatures\"]],true]]],false],[0,\"\\n\\n\\n  \"],[1,[25,\"resource-nav-menu\",null,[[\"session\",\"routeSegment\",\"model\"],[[19,0,[\"session\"]],\"edit-feature\",[19,0,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/places.hbs" } });
});
define("cityxcity/templates/cities/city/show", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZqmkJlZO", "block": "{\"symbols\":[\"option\",\"option\",\"option\",\"option\",\"set\",\"item\",\"colorSet\",\"option\",\"option\",\"group\",\"option\",\"group\",\"option\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[0,\"View Data\"],[8],[0,\"\\n\\n\"],[0,\"  \"],[6,\"div\"],[9,\"class\",\"ui labels filter-label-group\"],[7],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"showPlaces\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced large label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"showPlaces\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"showPlaces\"]]],null]],null],null],[7],[0,\"\\n      Places\\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"showInvestments\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced large label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"showInvestments\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"showInvestments\"]]],null]],null],null],[7],[0,\"\\n      Investments\\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"showParcels\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced large label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"showParcels\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"showParcels\"]]],null]],null],null],[7],[0,\"\\n      Parcels\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"and\",[[25,\"not\",[[19,0,[\"currentCity\",\"showPlaces\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"showInvestments\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"showParcels\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[6,\"h5\"],[9,\"class\",\"ui disabled header\"],[7],[0,\"\\n      \"],[6,\"i\"],[9,\"class\",\"ui reply rotated right icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        Select a Filter Above\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-accordion\",null,null,{\"statements\":[[4,\"if\",[[19,0,[\"currentCity\",\"showPlaces\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"tdi-semi-bold active title\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n        Places Filters\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"Place Status\"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui filter-label-group labels\"],[7],[0,\"\\n            \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"is_employer\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"is_employer\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"is_employer\"]]],null]],null],null],[7],[0,\"Employer\"],[8],[0,\"\\n             \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"activating\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"activating\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"activating\"]]],null]],null],null],[7],[0,\"Street Activating\"],[8],[0,\"\\n            \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"community_hub\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"community_hub\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"community_hub\"]]],null]],null],null],[7],[0,\"Community Hub\"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"              \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"tdi_asset\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"tdi_asset\"]]],null],[25,\"not\",[[19,0,[\"currentCity\",\"tdi_asset\"]]],null]],null],null],[7],[0,\"TDI Asset\"],[8],[0,\"\\n              \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[19,0,[\"currentCity\",\"engaged_owner\"]],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"engaged_owner\"]]],null],[25,\"not\",[[19,0,[\"engaged_owner\"]]],null]],null],null],[7],[0,\"Owner Engaged\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n            Place Types\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui equal width grid\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"chunk\",[8,[19,0,[\"currentCity\",\"assetTypeOptions\"]]],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n\"],[4,\"each\",[[19,12,[]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n\"],[4,\"ui-checkbox\",null,[[\"class\",\"checked\",\"onChange\"],[\"item\",[25,\"array-contains\",[[19,0,[\"currentCity\",\"assetTypesArray\"]],[19,13,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,13,[]],\"currentCity.assetTypes\"],null]]],{\"statements\":[[0,\"                      \"],[6,\"img\"],[10,\"src\",[26,[\"/images/icons/features/filters/\",[25,\"dasherize\",[[19,13,[]]],null],\".png\"]]],[9,\"class\",\"ui avatar image\"],[7],[8],[0,\"\\n                      \"],[6,\"span\"],[7],[1,[19,13,[]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[8],[0,\"\\n\"]],\"parameters\":[13]},null],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[12]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"currentCity\",\"showInvestments\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui tdi-blue divider\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"tdi-semi-bold active title\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n        Investments Filters\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui basic segment\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n            Investment Types\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui equal width grid\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"chunk\",[2,[19,0,[\"currentCity\",\"investmentTypeOptions\"]]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n\"],[4,\"each\",[[19,10,[]]],null,{\"statements\":[[4,\"ui-checkbox\",null,[[\"class\",\"checked\",\"onChange\"],[\"item\",[25,\"array-contains\",[[19,0,[\"currentCity\",\"investmentTypesArray\"]],[19,11,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,11,[]],\"currentCity.investmentTypes\"],null]]],{\"statements\":[[0,\"                      \"],[6,\"img\"],[10,\"src\",[26,[\"/images/icons/investments/\",[25,\"dasherize\",[[19,11,[]]],null],\".png\"]]],[7],[8],[0,\"\\n                      \"],[1,[19,11,[]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[11]},null],[0,\"                \"],[8],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"            \"],[8],[0,\"\\n\"],[4,\"if\",[[19,0,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[\"TDI Influenced\",\"item\",[19,0,[\"currentCity\",\"is_tdi_influenced\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"currentCity\",\"is_tdi_influenced\"]],[25,\"not\",[[19,0,[\"currentCity\",\"is_tdi_influenced\"]]],null]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n            Investment Statuses\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui horizontal list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"currentCity\",\"investmentStatusesOptions\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[19,9,[]],\"item\",[25,\"array-contains\",[[19,0,[\"currentCity\",\"investmentStatusesArray\"]],[19,9,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,9,[]],\"currentCity.investmentStatuses\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n            Investment Source\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui horizontal list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"currentCity\",\"investmentSourcesOptions\"]]],null,{\"statements\":[[4,\"ui-checkbox\",null,[[\"class\",\"checked\",\"onChange\"],[\"item\",[25,\"array-contains\",[[19,0,[\"currentCity\",\"investmentSourcesArray\"]],[19,8,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,8,[]],\"currentCity.investmentSources\"],null]]],{\"statements\":[[0,\"                \"],[6,\"img\"],[10,\"src\",[26,[\"/images/icons/investments/badge/\",[25,\"lowercase\",[[19,8,[]]],null],\".png\"]]],[7],[8],[0,\"\\n                \"],[1,[19,8,[]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[8]},null],[0,\"          \"],[8],[0,\"\\n\"],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"currentCity\",\"showParcels\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui tdi-blue divider\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"tdi-semi-bold active title\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n        Parcels Filters\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"Symbolize Map\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui equal width grid\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui labels flex-direction-column filter-label-group\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"currentCity\",\"parcelChoroplethSets\"]]],null,{\"statements\":[[0,\"                \"],[6,\"a\"],[10,\"class\",[26,[\"ui \",[25,\"if\",[[25,\"eq\",[[19,7,[]],[19,0,[\"currentCity\",\"choroplethLayer\"]]],null],\"inverted tdi-blue\",\"filters-label\"],null],\" even-spaced label\"]]],[3,\"action\",[[19,0,[]],\"changeProperty\",\"currentCity.choroplethLayer\",[19,7,[]]]],[7],[0,\"\\n                  \"],[1,[19,7,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"column\"],[9,\"style\",\"background-color: #E1F5F5;\"],[7],[0,\"\\n\"],[4,\"with\",[[25,\"find-by\",[\"setName\",[19,0,[\"currentCity\",\"choroplethLayer\"]],[19,0,[\"currentCity\",\"parcelChoroplethConfig\"]]],null]],null,{\"statements\":[[0,\"              Key - \"],[1,[19,5,[\"setName\"]],false],[0,\"\\n\"],[4,\"if\",[[19,5,[]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"ui labels\"],[7],[0,\"\\n\"],[4,\"each\",[[19,5,[\"colorMap\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"ui large label legend\"],[7],[0,\"\\n                      \"],[6,\"i\"],[9,\"class\",\"square icon\"],[10,\"style\",[26,[\"color: \",[19,6,[\"color\"]]]]],[7],[8],[0,\"\\n                      \"],[1,[25,\"if\",[[25,\"eq\",[[25,\"attribute-type\",[[19,6,[\"value\"]]],null],\"boolean\"],null],[25,\"humanize-string\",[[19,6,[\"key\"]]],null],[19,6,[\"value\"]]],null],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui equal width grid\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Land Use Type\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"currentCity\",\"landuseTypeOptions\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[19,4,[]],\"item\",[25,\"array-contains\",[[19,0,[\"currentCity\",\"landuseTypesArray\"]],[19,4,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,4,[]],\"currentCity.landuseTypes\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Tenure Status\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[\"For Lease\",\"item\",[19,0,[\"forLease\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"forLease\"]]],null]],null]]]],false],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[\"For Sale\",\"item\",[19,0,[\"forSale\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"forSale\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Engaged Owner\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n              \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[\"Engaged\",\"item\",[19,0,[\"isEngagedOwner\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"isEngagedOwner\"]]],null]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Ownership Statuses\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"OwnershipTypesOptions\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[19,3,[]],\"item\",[25,\"array-contains\",[[19,0,[\"OwnershipTypesArray\"]],[19,3,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,3,[]],\"OwnershipTypes\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Ground Floor Vacancy\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"GFVacancyStatusesOptions\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[19,2,[]],\"item\",[25,\"array-contains\",[[19,0,[\"GFVacancyStatusesArray\"]],[19,2,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,2,[]],\"GFVacancyStatuses\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"h4\"],[9,\"class\",\"ui header\"],[7],[0,\"\\n              Upper Level Vacancy\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui vertical list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"UFVacancyStatusesOptions\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"ui-checkbox\",null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[19,1,[]],\"item\",[25,\"array-contains\",[[19,0,[\"UFVacancyStatusesArray\"]],[19,1,[]]],null],[25,\"action\",[[19,0,[]],\"composeList\",[19,1,[]],\"UFVacancyStatuses\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"  \"],[1,[25,\"tabbed-results\",null,[[\"visibleFeatures\",\"showPlaces\",\"visibleInvestments\",\"showInvestments\",\"maxInvestments\",\"visibleParcels\",\"showParcels\"],[[19,0,[\"currentCity\",\"visibleFeatures\"]],[19,0,[\"currentCity\",\"showPlaces\"]],[19,0,[\"currentCity\",\"visibleInvestments\"]],[19,0,[\"currentCity\",\"showInvestments\"]],[19,0,[\"currentCity\",\"maxInvestments\"]],[19,0,[\"currentCity\",\"visibleParcels\"]],[19,0,[\"currentCity\",\"showParcels\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/city/show.hbs" } });
});
define("cityxcity/templates/cities/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QC9lLIQa", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"spinner\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect1\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect2\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect3\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect4\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect5\"],[7],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/cities/loading.hbs" } });
});
define("cityxcity/templates/components/accord-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rAGYMgry", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[6,\"strong\"],[7],[1,[18,\"itemText\"],false],[8],[8],[0,\"\\n  \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"itemVal\"],false],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/accord-item.hbs" } });
});
define("cityxcity/templates/components/basemap-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mfJm+p2K", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[19,0,[\"ready\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"ui horizontal list basemap-menu\"],[7],[0,\"    \\n    \"],[6,\"div\"],[9,\"class\",\"item has-pointer\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"basemap\"]]],null],\"default\"],null],null],[7],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",[26,[\"http://c.basemaps.cartocdn.com/light_all/\",[18,\"z\"],\"/\",[18,\"x\"],\"/\",[18,\"y\"],\".png\"]]],[9,\"class\",\"ui mini circular bordered image\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"header\"],[7],[0,\"Default\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"item has-pointer\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"basemap\"]]],null],\"satellite\"],null],null],[7],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",[26,[\"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/\",[18,\"z\"],\"/\",[18,\"y\"],\"/\",[18,\"x\"]]]],[9,\"class\",\"ui mini circular bordered image\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"header\"],[7],[0,\"Satellite\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"    \\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/basemap-menu.hbs" } });
});
define("cityxcity/templates/components/cities-grid", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MujpKBlp", "block": "{\"symbols\":[\"city\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui five column stackable grid cards\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"sort-by\",[\"name\",[19,0,[\"cities\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"live\"]]],null,{\"statements\":[[4,\"link-to\",[\"cities.city.show\",[19,1,[\"id\"]]],null,{\"statements\":[[0,\"          \"],[1,[25,\"city-card\",null,[[\"city\",\"class\"],[[19,1,[]],\"link\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"city-card\",null,[[\"city\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/cities-grid.hbs" } });
});
define("cityxcity/templates/components/city-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XRudX7/D", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"ui fluid card\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"image\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"card-image\"],[10,\"style\",[26,[\"min-height: 200px; background-image: url('\",[20,[\"city\",\"splash\"]],\"'); background-size: cover;\"]]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"card-image-overlay\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"extra content splash-inverted\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"right floated\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"city\",\"fellows\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[9,\"class\",\"user icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[1,[20,[\"city\",\"name\"]],false],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"right floated star\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"class\",\"ui mini image\"],[10,\"src\",[20,[\"city\",\"iconWatermarkUrl\"]],null],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/city-card.hbs" } });
});
define("cityxcity/templates/components/edit-resource", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v8GiSqTB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui horizontal list resource-nav-menu\"],[7],[0,\"\\n\"],[4,\"unless\",[[19,0,[\"model\",\"isNew\"]]],null,{\"statements\":[[4,\"link-to\",[[25,\"concat\",[\"cities.city.\",[19,0,[\"modelName\"]]],null],[19,0,[\"model\"]]],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"      \"],[6,\"i\"],[9,\"class\",\"large black circular arrow link left icon\"],[9,\"style\",\"background-color: white;\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],[19,0,[\"submitRoute\"]],[19,0,[\"model\"]]],null],null],[7],[0,\"\\n    \"],[6,\"i\"],[10,\"class\",[26,[\"large \",[25,\"if\",[[19,0,[\"model\",\"hasDirtyAttributes\"]],\"green\",\"black\"],null],\" circular link \",[25,\"if\",[[19,0,[\"model\",\"isSaving\"]],\"loading spinner icon\",\"save icon\"],null]]]],[9,\"style\",\"background-color: white;\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui form\"],[7],[0,\"\\n  \"],[11,1,[[25,\"hash\",null,[[\"assetTypes\",\"investmentTypes\",\"assetSubTypes\",\"investmentSources\",\"parcelOwnershipTypes\"],[[19,0,[\"assetTypes\"]],[19,0,[\"investmentTypes\"]],[19,0,[\"assetSubTypes\"]],[19,0,[\"investmentSources\"]],[19,0,[\"parcelOwnershipTypes\"]]]]]]],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/edit-resource.hbs" } });
});
define("cityxcity/templates/components/enumerate-properties", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jU/tEdm7", "block": "{\"symbols\":[\"property\"],\"statements\":[[6,\"table\"],[9,\"class\",\"ui basic table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[7],[0,\"Property\"],[8],[0,\"\\n      \"],[6,\"th\"],[7],[0,\"Value\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"properties\"]]],null,{\"statements\":[[4,\"if\",[[25,\"is-not-empty\",[[25,\"get\",[[19,0,[\"model\"]],[19,1,[]]],null]],null]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[7],[0,\"\\n          \"],[6,\"td\"],[7],[1,[25,\"humanize-string\",[[19,1,[]]],null],false],[8],[0,\"\\n          \"],[6,\"td\"],[7],[1,[25,\"get\",[[19,0,[\"model\"]],[19,1,[]]],null],false],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/enumerate-properties.hbs" } });
});
define("cityxcity/templates/components/export-data", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "akY7PBAV", "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"ember-wormhole\",null,[[\"to\"],[\"fixed-footer\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"link item\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"isExporting\"]]],null],true],null],null],[7],[0,\"\\n    Export\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"isExporting\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"translucentOverlay\"],[[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"isExporting\"]]],null],false],null],true]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"ui segment\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n        Export Current Screen\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui button\"],[3,\"action\",[[19,0,[]],[19,0,[\"export_csv\"]],\"visibleFeatures\",[25,\"array\",[\"city\",\"relatedFeature\",\"open_or_closed\"],null]]],[7],[0,\"\\n        Features\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui button\"],[3,\"action\",[[19,0,[]],[19,0,[\"export_csv\"]],\"visibleInvestments\",[25,\"array\",[\"city\",\"relatedInvestment\",\"investment_status\"],null]]],[7],[0,\"\\n        Investments\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui button\"],[3,\"action\",[[19,0,[]],[19,0,[\"export_csv\"]],\"visibleParcels\",[25,\"array\",[\"city\",\"geom\",\"geojson\",\"latest_is_engaged_owner\",\"latest_is_for_sale\",\"latest_is_for_lease\",\"latest_is_vacant_lot\",\"latest_ground_floor_vacancy\",\"latest_upper_floor_vacancy\",\"is_engaged_owner\",\"is_for_sale\",\"is_for_lease\",\"is_vacant_lot\",\"ground_floor_vacancy\",\"upper_floor_vacancy\",\"yearBuilt\"],null]]],[7],[0,\"\\n        Parcels\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui secondary button\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"isExporting\"]]],null],false],null],null],[7],[0,\"Close\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/export-data.hbs" } });
});
define("cityxcity/templates/components/file-field-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V7FMxKHP", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"file-upload\",null,[[\"url\",\"progress\",\"message\"],[\"/api/upload\",[19,0,[\"progress\"]],[19,0,[\"message\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[19,0,[\"progress\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"ui green progress\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"bar\"],[10,\"style\",[18,\"barStyle\"],null],[7],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"label\"],[7],[1,[18,\"message\"],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/file-field-progress.hbs" } });
});
define("cityxcity/templates/components/file-upload", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lnBVPfrb", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/file-upload.hbs" } });
});
define("cityxcity/templates/components/footer-nav", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "71/AMR71", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"footer-nav\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui borderless mini menu\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"left menu\"],[9,\"id\",\"fixed-footer\"],[7],[0,\"\\n      \"],[1,[25,\"scroll-to\",null,[[\"href\",\"label\",\"class\"],[\"#about\",\"About\",\"link item\"]]],false],[0,\"\\n      \"],[1,[25,\"scroll-to\",null,[[\"href\",\"label\",\"class\"],[\"#data-info\",\"Data Info\",\"link item\"]]],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"link item\"],[7],[0,\"\\n        Legal\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"right fitted menu\"],[7],[0,\"\\n      \"],[6,\"a\"],[9,\"class\",\"link item\"],[9,\"href\",\"https://www.massdevelopment.com\"],[9,\"target\",\"_blank\"],[7],[0,\"\\n        \"],[6,\"img\"],[9,\"src\",\"/images/massdevelopmentlogo.jpg\"],[9,\"class\",\"ui tiny image\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/footer-nav.hbs" } });
});
define("cityxcity/templates/components/geojson-to-svg", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CVZ8Xr4Z", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/geojson-to-svg.hbs" } });
});
define("cityxcity/templates/components/image-layer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bgZjPlSs", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/image-layer.hbs" } });
});
define("cityxcity/templates/components/investment-accord", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rEHM2UDw", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active title\"],[7],[0,\"\\n\\n        \"],[6,\"h3\"],[7],[0,\"Attributes \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"sourceType\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"sourceType\"]],\"Source Type\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"investmentType\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"investmentType\"]],\"Investment Type\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"estAmount\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"estAmount\"]],\"Estimated Amount\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"exacAmount\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"exacAmount\"]],\"Exact Amount\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"investmentStatus\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"investmentStatus\"]],\"Status\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[4,\"if\",[[19,0,[\"projectName\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"projectName\"]],\"Project Name\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"contactType\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"contactType\"]],\"Contact Type\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"contactName\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"contactName\"]],\"Contact Name\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"contactRole\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"contactRole\"]],\"Contact Role\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"contactOrg\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"contactOrg\"]],\"Contact Organization\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/investment-accord.hbs" } });
});
define("cityxcity/templates/components/main-map", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4DGNbQvR", "block": "{\"symbols\":[\"parcel\",\"popup\",\"cluster\",\"feature\",\"city\"],\"statements\":[[4,\"if\",[[19,0,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[25,\"and\",[[19,0,[\"currentCity\",\"latitude\"]],[19,0,[\"currentCity\",\"longitude\"]],[19,0,[\"currentCity\",\"zoom\"]]],null]],null,{\"statements\":[[4,\"leaflet-map\",null,[[\"onMove\",\"onMoveend\",\"onLoad\",\"zoom\",\"lat\",\"lng\",\"maxZoom\"],[[25,\"action\",[[19,0,[]],\"updateNewPoint\"],null],[25,\"action\",[[19,0,[]],\"currentMapState\"],null],[25,\"action\",[[19,0,[]],\"initMap\"],null],[19,0,[\"currentCity\",\"zoom\"]],[19,0,[\"currentCity\",\"latitude\"]],[19,0,[\"currentCity\",\"longitude\"]],[19,0,[\"maxZoom\"]]]],{\"statements\":[[4,\"if\",[[25,\"eq\",[[19,0,[\"basemap\"]],\"default\"],null]],null,{\"statements\":[[0,\"        \"],[1,[25,\"tile-layer\",null,[[\"maxNativeZoom\",\"maxZoom\",\"url\"],[[19,0,[\"maxNativeZoom\"]],[19,0,[\"maxZoom\"]],\"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,0,[\"basemap\"]],\"satellite\"],null]],null,{\"statements\":[[0,\"        \"],[1,[25,\"tile-layer\",null,[[\"maxNativeZoom\",\"maxZoom\",\"url\"],[[19,0,[\"maxNativeZoom\"]],[19,0,[\"maxZoom\"]],\"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[25,\"and\",[[19,5,[\"imageOverlay\"]],[19,5,[\"imageOverlayBBox\"]]],null]],null,{\"statements\":[[0,\"          \"],[1,[25,\"image-layer\",null,[[\"imageUrl\",\"bounds\",\"opacity\"],[[19,5,[\"imageOverlay\"]],[19,5,[\"imageOverlayBBox\"]],0.9]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"currentCity\",\"showPlaces\"]]],null,{\"statements\":[[4,\"marker-cluster-layer\",null,[[\"maxClusterRadius\",\"disbableClusteringAtZoom\"],[[19,0,[\"maxClusterRadius\"]],[19,0,[\"disabledClusteringAtZoom\"]]]],{\"statements\":[[4,\"each\",[[19,0,[\"currentCity\",\"visibleFeatures\"]]],null,{\"statements\":[[4,\"if\",[[25,\"and\",[[19,4,[\"latitude\"]],[19,4,[\"id\"]]],null]],null,{\"statements\":[[0,\"              \"],[1,[25,\"related-investments-icon\",null,[[\"feature\",\"showInvestments\",\"linkTo\"],[[19,4,[]],[19,0,[\"currentCity\",\"showInvestments\"]],[25,\"transition-to\",[\"cities.city.places\",[19,4,[\"id\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"currentCity\",\"showParcels\"]]],null,{\"statements\":[[4,\"each\",[[19,0,[\"currentCity\",\"visibleParcels\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"geojson\"]]],null,{\"statements\":[[4,\"map-popup\",null,[[\"lat\",\"lng\"],[[19,1,[\"latitude\"]],[19,1,[\"longitude\"]]]],{\"statements\":[[0,\"              \"],[6,\"strong\"],[7],[1,[19,1,[\"ownership_type\"]],false],[8],[0,\"\\n              \"],[6,\"img\"],[9,\"class\",\"ui small image\"],[10,\"src\",[19,1,[\"splash\"]],null],[7],[8],[0,\"\\n              \"],[6,\"strong\"],[7],[1,[19,1,[\"address\"]],false],[8],[0,\"\\n              \"],[1,[25,\"geojson-layer\",null,[[\"geoJSON\",\"style\",\"onClick\",\"onMouseover\",\"onMouseout\"],[[19,1,[\"geojson\"]],[19,0,[\"parcelsChoroplethMapping\"]],[25,\"transition-to\",[\"cities.city.parcels\",[19,1,[\"id\"]]],null],[25,\"action\",[[19,0,[]],[19,2,[\"onMouseover\"]]],null],[25,\"action\",[[19,0,[]],[19,2,[\"onMouseout\"]]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[19,1,[\"isSelected\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"marker-layer\",null,[[\"lat\",\"lng\",\"opacity\"],[[19,1,[\"latitude\"]],[19,1,[\"longitude\"]],1]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"currentCity\",\"isPlottingPoint\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"marker-layer\",null,[[\"lat\",\"lng\",\"icon\"],[[19,0,[\"currentCity\",\"newPointLatitude\"]],[19,0,[\"currentCity\",\"newPointLongitude\"]],[25,\"icon\",null,[[\"iconUrl\",\"iconAnchor\",\"iconSize\"],[\"/images/add-data-pin.png\",[25,\"array\",[30,76],null],[25,\"array\",[59,76],null]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \\n  \"],[1,[25,\"basemap-menu\",null,[[\"x\",\"y\",\"z\",\"basemap\"],[[19,0,[\"layerPointx\"]],[19,0,[\"layerPointy\"]],[19,0,[\"layerPointz\"]],[19,0,[\"basemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/main-map.hbs" } });
});
define("cityxcity/templates/components/main-nav", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DN74tSpd", "block": "{\"symbols\":[\"city\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui inverted main menu\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"left menu\"],[9,\"id\",\"left-items\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"cubes item\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"application\"],[[\"class\"],[\"cities-link\"]],{\"statements\":[[0,\"        \"],[6,\"i\"],[9,\"class\",\"content large icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\"],[\"dropdown item\",[19,0,[\"currentCity\",\"city\",\"name\"]]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select Your District\"],[8],[0,\"\\n      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"filter-by\",[\"live\",true,[19,0,[\"model\"]]],null]],null,{\"statements\":[[4,\"link-to\",[\"cities.city.show\",[19,1,[\"id\"]]],[[\"class\",\"tagName\"],[\"item\",\"a\"]],{\"statements\":[[0,\"            \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"application\"],[[\"tagName\",\"class\"],[\"div\",\"header link item\"]],{\"statements\":[[0,\"    \"],[6,\"h3\"],[7],[0,\"TDI   Block x Block\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[9,\"class\",\"right menu\"],[9,\"id\",\"right-items\"],[7],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/main-nav.hbs" } });
});
define("cityxcity/templates/components/map-popup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "geWDAgW1", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"hash\",null,[[\"onMouseover\",\"onMouseout\"],[[25,\"action\",[[19,0,[]],\"onMouseover\"],null],[25,\"action\",[[19,0,[]],\"onMouseout\"],null]]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/map-popup.hbs" } });
});
define("cityxcity/templates/components/new-investment-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q7qdmE/h", "block": "{\"symbols\":[\"field\",\"type\",\"type\"],\"statements\":[[4,\"edit-resource\",null,[[\"model\"],[[19,0,[\"model\"]]]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n    What is the name of the investment?\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\"],[\"text\",\"name\",[19,0,[\"model\",\"project\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n    Attributes\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n      Towards which use was the investment directed?\\n    \"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"investment_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"investment_type\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"investmentTypes\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,3,[]]]]],[7],[0,\"\\n            \"],[1,[19,3,[]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui dividing header\"],[7],[0,\"\\n      What is the source of this investment type?\\n    \"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"model\",\"source_type\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"model\",\"source_type\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"investmentSources\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,2,[]]]]],[7],[0,\"\\n            \"],[1,[19,2,[]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[1,[25,\"timeline-builder\",null,[[\"snapshots\",\"choices\"],[[19,0,[\"model\",\"investment_status\"]],[25,\"array\",[\"Proposed\",\"In Progress\",\"Completed\",\"Incomplete\"],null]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/new-investment-form.hbs" } });
});
define("cityxcity/templates/components/over-time-chart", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5VyL+jEb", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[19,0,[\"openDates\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"range-slider\",null,[[\"start\",\"tooltips\",\"min\",\"max\",\"tooltip\",\"on-change\"],[[19,0,[\"selection\"]],[19,0,[\"tooltipsConfig\"]],[19,0,[\"timeMin\"]],[19,0,[\"timeMax\"]],true,[19,0,[\"onEnd\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/over-time-chart.hbs" } });
});
define("cityxcity/templates/components/parcel-accord", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sOI3ZH3N", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"active title\"],[7],[0,\"\\n\\n        \"],[6,\"h3\"],[7],[0,\"Attributes \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"streetAddress\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"streetAddress\"]],\"Address\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"landUse\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"landUse\"]],\"Land Use\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"useType\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"useType\"]],\"Use Type\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"yearBuilt\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"yearBuilt\"]],\"Year Built\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[4,\"if\",[[19,0,[\"gFloorVacancy\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"gFloorVacancy\"]],\"Ground Floor/Vacancy Status\"]]],false],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[4,\"if\",[[19,0,[\"assessedValue\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"accord-item\",null,[[\"itemVal\",\"itemText\"],[[19,0,[\"assessedValue\"]],\"Assessed Value\"]]],false],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n\\n\\n\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/parcel-accord.hbs" } });
});
define("cityxcity/templates/components/place-accord", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Sfb3/0R2", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n\\n        \"],[6,\"h3\"],[7],[0,\"Location \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Street address\"],[8],[8],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"streetAddress\"],false],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Amount\"],[8],[8],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"investmentsRel\"],false],[8],[0,\"\\n\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"active title\"],[7],[0,\"\\n\\n      \"],[6,\"h3\"],[7],[0,\"Attributes \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"active content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"featureType\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Feature type\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"featureType\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"featureSubType\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Feature sub-type\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"featureSubType\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"open_on\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Open and close dates\"],[8],[8],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[6,\"strong\"],[7],[0,\"Opened \"],[8],[1,[18,\"open_on\"],false],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"close_on\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[6,\"strong\"],[7],[0,\"Closed \"],[8],[1,[18,\"close_on\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"is_employer\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Is this feature an employer?\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"is_employer\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"isActivating\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Does this feature activate the street nearby?\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"isActivating\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"isContributing\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Does this feature contribute to goals of the TDI program?\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"isContributing\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"isEngaged\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Is the owner of this feature engaged with the TDI program or other community activities?\"],[8],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"isEngaged\"],false],[0,\" \"],[1,[18,\"engagedFrom\"],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n      \"],[6,\"h3\"],[7],[0,\"Documents and Links \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"relDocument\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Related documents\"],[8],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,0,[\"moreInfoLinkDesc\"]]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[7],[0,\"For more info visit:\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n\\n      \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[6,\"a\"],[10,\"href\",[18,\"moreInfoLinkUrl\"],null],[9,\"target\",\"_blank\"],[7],[1,[18,\"moreInfoLinkDesc\"],false],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n      \"],[6,\"h3\"],[7],[0,\"Contacts \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"contactName\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Owner name \"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"contactName\"],false],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"contactTitle\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Owner title \"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"contactTitle\"],false],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"ownerPhone\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Owner phone \"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"ownerPhone\"],false],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"ownerEmail\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"ui text vertical segment seg\"],[7],[0,\"\\n          \"],[6,\"p\"],[7],[0,\"Owner email \"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"ownerEmail\"],false],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"ui vertical segment\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui accordion\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Notes\"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"place-detail\"],[7],[1,[18,\"notes\"],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/place-accord.hbs" } });
});
define("cityxcity/templates/components/popup-layer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "umSPN4MF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/popup-layer.hbs" } });
});
define("cityxcity/templates/components/related-investments-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M4ItrE/G", "block": "{\"symbols\":[\"popup\"],\"statements\":[[4,\"map-popup\",null,[[\"lat\",\"lng\"],[[19,0,[\"feature\",\"latitude\"]],[19,0,[\"feature\",\"longitude\"]]]],{\"statements\":[[0,\"  \"],[6,\"strong\"],[7],[1,[20,[\"feature\",\"feature_type\"]],false],[8],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"ui small image\"],[10,\"src\",[20,[\"feature\",\"splash\"]],null],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[1,[20,[\"feature\",\"feature_name\"]],false],[8],[0,\"\\n\"],[4,\"marker-layer\",null,[[\"lat\",\"lng\",\"icon\",\"onClick\",\"onMouseover\",\"onMouseout\",\"pane\"],[[19,0,[\"feature\",\"latitude\"]],[19,0,[\"feature\",\"longitude\"]],[25,\"div-icon\",null,[[\"iconSize\",\"className\",\"html\"],[[19,0,[\"iconSize\"]],\"related-investments-icon\",[19,0,[\"markup\"]]]]],[25,\"action\",[[19,0,[]],[19,0,[\"linkTo\"]]],null],[25,\"action\",[[19,0,[]],[19,1,[\"onMouseover\"]]],null],[25,\"action\",[[19,0,[]],[19,1,[\"onMouseout\"]]],null],\"points\"]],{\"statements\":[],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/related-investments-icon.hbs" } });
});
define("cityxcity/templates/components/resource-grid", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zgC35oVt", "block": "{\"symbols\":[\"resource\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui two column grid cards\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"sort-by\",[[19,0,[\"sortBy\"]],[19,0,[\"resources\"]]],null]],null,{\"statements\":[[4,\"link-to\",[[19,0,[\"resourceRoute\"]],[19,1,[]]],[[\"class\"],[\"column\"]],{\"statements\":[[0,\"      \"],[11,2,[[25,\"hash\",null,[[\"resource\"],[[19,1,[]]]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},{\"statements\":[[0,\"    \"],[6,\"h3\"],[9,\"class\",\"ui disabled header\"],[7],[0,\"\\n      No Results\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/resource-grid.hbs" } });
});
define("cityxcity/templates/components/resource-nav-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YfzgMJfp", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"ui horizontal list resource-nav-menu\"],[9,\"style\",\"margin-top:10px;\"],[7],[0,\"\\n\"],[4,\"link-to\",[[25,\"concat\",[\"cities.city.show\"],null],[19,0,[\"model\",\"city\",\"id\"]]],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"    \"],[6,\"i\"],[9,\"class\",\"large black circular arrow link left icon\"],[9,\"style\",\"background-color: white;\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"and\",[[19,0,[\"session\",\"isAuthenticated\"]],[19,0,[\"routeSegment\"]]],null]],null,{\"statements\":[[4,\"link-to\",[[25,\"concat\",[\"cities.city.\",[19,0,[\"routeSegment\"]]],null],[19,0,[\"model\"]]],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"      \"],[6,\"i\"],[9,\"class\",\"large black circular link edit icon\"],[9,\"style\",\"background-color: white;\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/resource-nav-menu.hbs" } });
});
define("cityxcity/templates/components/scroll-to", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OaPaKHeS", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[18,\"label\"],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/scroll-to.hbs" } });
});
define("cityxcity/templates/components/search-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pZM97vph", "block": "{\"symbols\":[\"result\"],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"search-input \",[25,\"if\",[[19,0,[\"results\"]],\"searching\"],null]]]],[7],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Search\"],[8],[0,\"\\n\\n  \"],[1,[25,\"input\",null,[[\"placeholder\",\"value\"],[[19,0,[\"inputPlaceholder\"]],[19,0,[\"query\"]]]]],false],[0,\"\\n  \\n  \"],[6,\"span\"],[9,\"class\",\"search-icon\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"clearQuery\"],null],null],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"query\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[7],[0,\"x\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"img\"],[9,\"src\",\"/images/icons/search.svg\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"results\"]]],null,{\"statements\":[[0,\"  \"],[6,\"ul\"],[9,\"class\",\"search-results\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"results\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showResult\",[19,1,[]]],null],null],[7],[0,\"\\n        \"],[1,[19,1,[\"name\"]],false],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/search-bar.hbs" } });
});
define("cityxcity/templates/components/select-association", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M1F2a2cT", "block": "{\"symbols\":[\"resource\",\"&default\"],\"statements\":[[4,\"power-select-multiple\",null,[[\"options\",\"selected\",\"placeholder\",\"searchField\",\"onchange\"],[[19,0,[\"options\"]],[19,0,[\"selected\"]],[19,0,[\"placeholder\"]],[19,0,[\"searchField\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"selected\"]]],null]],null]]],{\"statements\":[[0,\"  \"],[1,[25,\"get\",[[19,1,[]],[19,0,[\"searchField\"]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/select-association.hbs" } });
});
define("cityxcity/templates/components/statewide-map", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sL9UmFUf", "block": "{\"symbols\":[\"city\"],\"statements\":[[4,\"leaflet-map\",null,[[\"lat\",\"lng\",\"zoom\",\"scrollWheelZoom\",\"doubleClickZoom\",\"dragging\",\"class\"],[[19,0,[\"lat\"]],[19,0,[\"lng\"]],[19,0,[\"zoom\"]],false,false,false,\"statewide-view\"]],{\"statements\":[[0,\"  \"],[1,[25,\"tile-layer\",null,[[\"url\"],[\"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"]]],false],[0,\"\\n\"],[4,\"each\",[[19,0,[\"cities\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"marker-layer\",null,[[\"lat\",\"lng\",\"onClick\",\"icon\"],[[19,1,[\"latitude\"]],[19,1,[\"longitude\"]],[25,\"if\",[[19,1,[\"live\"]],[25,\"transition-to\",[\"cities.city.show\",[19,1,[\"id\"]]],null]],null],[25,\"icon\",null,[[\"iconUrl\"],[[25,\"concat\",[\"images/icons/cities/\",[25,\"lowercase\",[[19,1,[\"name\"]]],null],\".png\"],null]]]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/statewide-map.hbs" } });
});
define("cityxcity/templates/components/tabbed-results", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tvd6NCiT", "block": "{\"symbols\":[\"parcel\",\"card\"],\"statements\":[[6,\"div\"],[9,\"class\",\"ui pointing secondary tabular menu\"],[7],[0,\"\\n  \"],[6,\"a\"],[9,\"class\",\"item active\"],[9,\"data-tab\",\"features\"],[7],[0,\"Places and Investments\"],[8],[0,\"\\n  \"],[6,\"a\"],[9,\"class\",\"item\"],[9,\"data-tab\",\"parcels\"],[7],[0,\"Available Spaces\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui tab active\"],[9,\"data-tab\",\"features\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui two column grid\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"union\",[[25,\"sort-by\",[\"name\",[19,0,[\"visibleFeatures\"]]],null],[19,0,[\"visibleInvestments\"]]],null]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n\"],[4,\"tdi-card\",null,[[\"modelContext\",\"image\",\"height\"],[[19,2,[]],[25,\"or\",[[19,2,[\"splash\"]],[19,2,[\"iconUrl\"]]],null],150]],{\"statements\":[[4,\"if\",[[19,2,[\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"truncate\",[[19,2,[\"name\"]],15],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[19,2,[\"estimated_amount\"]]],null,{\"statements\":[[0,\"              $\"],[1,[19,2,[\"estimated_amount\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[19,2,[\"investment_descriptor\"]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"      \"],[6,\"h3\"],[9,\"style\",\"margin: 0 auto; color: rgba(0,0,0,0.44);\"],[7],[0,\"\\n        No Results\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui tab\"],[9,\"data-tab\",\"parcels\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui two column grid cards\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"union\",[[25,\"filter-by\",[\"property_for_sale_latest\",true,[19,0,[\"visibleParcels\"]]],null],[25,\"filter-by\",[\"property_for_lease_latest\",true,[19,0,[\"visibleParcels\"]]],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n\"],[4,\"tdi-card\",null,[[\"route\",\"modelContext\",\"image\",\"height\"],[\"cities.city.parcels\",[19,1,[]],[19,1,[\"splash\"]],100]],{\"statements\":[[0,\"          \"],[1,[25,\"truncate\",[[19,1,[\"street_address\"]],15],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"      \"],[6,\"h3\"],[9,\"style\",\"margin: 0 auto; color: rgba(0,0,0,0.44);\"],[7],[0,\"\\n        No Results\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/tabbed-results.hbs" } });
});
define("cityxcity/templates/components/tdi-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NFF8UmmF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"link-to\",[[19,0,[\"route\"]],[19,0,[\"modelContext\"]]],[[\"class\"],[\"ui fluid card\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"image\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"card-image\"],[10,\"style\",[18,\"style\"],null],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"card-image-overlay\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"extra content splash-inverted\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"left floated\"],[7],[0,\"\\n      \"],[11,1],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"right floated star\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"class\",\"ui mini image\"],[10,\"src\",[20,[\"modelContext\",\"iconWatermarkUrl\"]],null],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/tdi-card.hbs" } });
});
define("cityxcity/templates/components/timeline-builder", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q3xdDaCp", "block": "{\"symbols\":[\"snapshot\"],\"statements\":[[4,\"each\",[[19,0,[\"orderedSnapshots\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"timeline-edit\",null,[[\"month\",\"status\",\"choices\"],[[19,1,[\"date\"]],[19,1,[\"status\"]],[19,0,[\"choices\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"div\"],[9,\"class\",\"ui gray fluid button\"],[3,\"action\",[[19,0,[]],\"addNew\"]],[7],[0,\"\\nAdd\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui divider\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/timeline-builder.hbs" } });
});
define("cityxcity/templates/components/timeline-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4wEmaKnL", "block": "{\"symbols\":[\"month\",\"choice\"],\"statements\":[[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"field selection\",[19,0,[\"status\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"status\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select Status\"],[8],[0,\"\\n    \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"choices\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,2,[]]]]],[7],[0,\"\\n          \"],[1,[19,2,[]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"ui fields\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"Month\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[19,0,[\"month\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"month\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[0,\"Select Month\"],[8],[0,\"\\n      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"months\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"item\"],[10,\"data-value\",[26,[[19,1,[]]]]],[7],[0,\"\\n            \"],[1,[19,1,[]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"six wide field\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"Year\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"name\",\"value\",\"placeholder\"],[\"text\",\"name\",[19,0,[\"year\"]],\"YYYY\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/timeline-edit.hbs" } });
});
define("cityxcity/templates/components/ui-accordion", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sCK1ZGXR", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-accordion.hbs" } });
});
define("cityxcity/templates/components/ui-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AjBd5eec", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[19,0,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[19,0,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[6,\"label\"],[7],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n  \"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-checkbox.hbs" } });
});
define("cityxcity/templates/components/ui-dimmer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "C1yoJQ/E", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-dimmer.hbs" } });
});
define("cityxcity/templates/components/ui-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gFWIF2/3", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null],[25,\"action\",[[19,0,[]],\"mapping\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-dropdown.hbs" } });
});
define("cityxcity/templates/components/ui-embed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b2Z8QCD+", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-embed.hbs" } });
});
define("cityxcity/templates/components/ui-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BkND1Dfv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-modal.hbs" } });
});
define("cityxcity/templates/components/ui-nag", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eox56Nf2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-nag.hbs" } });
});
define("cityxcity/templates/components/ui-popup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EBRszWyC", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-popup.hbs" } });
});
define("cityxcity/templates/components/ui-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1bxdgvN4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-progress.hbs" } });
});
define("cityxcity/templates/components/ui-radio", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vv1C/Yuw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[19,0,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[19,0,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-radio.hbs" } });
});
define("cityxcity/templates/components/ui-rating", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HsUr8Nlq", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-rating.hbs" } });
});
define("cityxcity/templates/components/ui-search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rrPgtqrF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-search.hbs" } });
});
define("cityxcity/templates/components/ui-shape", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pf++YuST", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-shape.hbs" } });
});
define("cityxcity/templates/components/ui-sidebar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nMqcE/Wq", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-sidebar.hbs" } });
});
define("cityxcity/templates/components/ui-sticky", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ftkfZjiz", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-sticky.hbs" } });
});
define("cityxcity/templates/components/ui-visibility-sticky", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RdzAQOMv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/components/ui-visibility-sticky.hbs" } });
});
define("cityxcity/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "alCFpjGT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"ui container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui basic center aligned segment\"],[7],[0,\"\\n    \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        Block x Block\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[0,\"Mapping the place-based economic development activity enabled by the \\n          \"],[6,\"a\"],[9,\"href\",\"http://www.massdevelopment.com/what-we-offer/key-initiatives/gateway-cities/\"],[9,\"target\",\"_blank\"],[7],[0,\"\\n            \"],[6,\"h3\"],[9,\"class\",\"ui splash semi-bold header\"],[7],[0,\"Transformation Development Initiative\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui container\"],[7],[0,\"\\n    \"],[1,[25,\"cities-grid\",null,[[\"cities\"],[[19,0,[\"model\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[1,[25,\"statewide-map\",null,[[\"cities\"],[[19,0,[\"model\"]]]]],false],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui basic center aligned segment\"],[9,\"id\",\"about\"],[7],[0,\"\\n    \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        Block x Block\\n        \"],[6,\"div\"],[9,\"class\",\"sub header\"],[7],[0,\"Mapping the place-based economic development activity enabled by the \\n          \"],[6,\"a\"],[9,\"href\",\"http://www.massdevelopment.com/what-we-offer/key-initiatives/gateway-cities/\"],[9,\"target\",\"_blank\"],[7],[0,\"\\n            \"],[6,\"h3\"],[9,\"class\",\"ui splash semi-bold header\"],[7],[0,\"Transformation Development Initiative\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui container\"],[7],[0,\"\\n      \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"About Block x Block\"],[8],[0,\"\\n\\n      \"],[6,\"p\"],[7],[0,\"This web-based, interactive platform records and contextualizes economic activity at the scale in which urban interventions are deployed and experienced. In doing so, the tool captures hard-earned implementation lessons, reveals spatial and temporal patterns of development, and refines our understanding of catalytic investments. The maps of hyper-localized activity contained within the platform do more than visualize data. The relationships between points are themselves an additional form of data: one that correlates development outcomes with the collective actions of the community of stakeholders responsible for the district’s long-term success. Right now, the platform is operating in beta mode. We appreciate your participation in the ongoing data collection efforts—we believe that your working knowledge is critical to the success of future place-based interventions and we thank you for sharing your experience with us!\"],[8],[0,\"\\n\\n      \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"About Transformation Development Initiative\"],[8],[0,\"\\n\\n      \"],[6,\"p\"],[7],[0,\"MassDevelopment's Transformative Development Initiative (TDI) is a development accelerator for Gateway Cities. The initiative acts through Fellows and District Managers to implement locally initiated, catalytic revitalization activities within compact geographies, each no larger than a 5 minute walking radius. Team TDI works in conjunction with local public-private partners to enable sustainable district management, build a vibrant and inclusive public realm, and inspire investments by local residents, entrepreneurs, and businesses, and additional private development—contributions that we call “community co-investment.” Along with program-specific tools in the Commonwealth of Massachusetts' Transformative Development Fund, TDI deploys existing MassDevelopment finance products and real estate services to encourage development activity by private landowners, enterprises, and investors. The Transformative Development Fund was created within MassDevelopment pursuant to C. 287, Acts of 2014, in August 2014. Twenty-six Gateway Cities were eligible for the program, and in 2014, 10 were selected for the three-year pilot program. These 10 districts are currently in development.\"],[8],[0,\"\\n\\n\\n      \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"About MassDevelopment\"],[8],[0,\"\\n\\n      \"],[6,\"p\"],[7],[0,\"As the Commonwealth’s quasi-public economic development and finance authority, MassDevelopment offers financing and real estate solutions to support companies and nonprofits, increase housing, eliminate blight, and drive economic growth across Massachusetts.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[9,\"id\",\"data-info\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        Data Info\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui container\"],[7],[0,\"\\n      \"],[6,\"h1\"],[9,\"class\",\"ui splash header\"],[7],[0,\"About Block x Block\"],[8],[0,\"\\n\\n      \"],[6,\"p\"],[7],[0,\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"mini ui button\"],[7],[0,\"\\n      Back to top\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"footer-nav\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/index.hbs" } });
});
define("cityxcity/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FeY8UsN3", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"spinner\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect1\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect2\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect3\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect4\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"rect5\"],[7],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "cityxcity/templates/loading.hbs" } });
});
define('cityxcity/transforms/jsonstring', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      if (serialized) {
        return JSON.parse(serialized);
      } else {
        return [];
      }
    },
    serialize: function serialize(deserialized) {
      if (deserialized) {
        return JSON.stringify(deserialized);
      } else {
        return '[]';
      }
    }
  });
});
define('cityxcity/transforms/timeline', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {

      // parse
      serialized.forEach(function (snapshot) {
        if (snapshot.value === 'true' || snapshot.value === 'false') {
          snapshot.value = snapshot.value === 'true';
        }
      });

      return serialized.sort(function (snapshot1, snapshot2) {
        var a = snapshot1.a;
        var b = snapshot2.b;


        return b - a;
      });
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('cityxcity/transforms/timelinne', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      return serialized;
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('cityxcity/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.toRoute('cities.city.places'), this.use('fade'));
    this.transition(this.toRoute('cities.city.parcels'), this.use('fade'));
    this.transition(this.toRoute('cities.city.investments'), this.use('fade'));
  };

  ;
});
define('cityxcity/utils/apply-filter-to', ['exports', 'cityxcity/utils/is-any-filter', 'cityxcity/utils/is-true-filter', 'cityxcity/utils/is-within-filter', 'cityxcity/utils/is-longitudinal-filter'], function (exports, _isAnyFilter, _isTrueFilter, _isWithinFilter, _isLongitudinalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = applyFilterTo;
  exports.getFilter = getFilter;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function applyFilterTo(enumerable, config) {
    if (enumerable) return {
      get: function get() {
        return getFilter(this, enumerable, config);
      }
    };
  }

  function getFilter(context, enumerable, config) {
    var models = context.get(enumerable);

    if (models) config.forEach(function (propertyConfig) {
      var filter = void 0;
      var filterType = propertyConfig.filterType;

      if (filterType == "isWithin") {
        var _propertyConfig$filte = _slicedToArray(propertyConfig.filter, 2),
            min = _propertyConfig$filte[0],
            max = _propertyConfig$filte[1];

        filter = [context.get(min), context.get(max)];
      } else {
        filter = context.get(propertyConfig.filter);
      }

      var property = propertyConfig.property;

      models = models.filter(findFilterFunction(filterType).bind(context, filter, property));
    });

    return models;
  }

  function findFilterFunction(filterType) {
    switch (filterType) {
      case 'isAny':
        return _isAnyFilter.default;
      case 'isTrue':
        return _isTrueFilter.default;
      case 'isWithin':
        return _isWithinFilter.default;
      case 'isLongitudinal':
        return _isLongitudinalFilter.default;
    }
  }
});
define("cityxcity/utils/arrayify", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = arrayify;
  function arrayify(propertyString, delimiter) {
    return {
      get: function get() {
        if (!this.get(propertyString)) return [];
        return this.get(propertyString).split(delimiter);
      }
    };
  }
});
define('cityxcity/utils/csv-factory', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = csvFactory;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function csvFactory(models, exclusions) {
    var data = models;
    var keys = Object.keys(data[0].toJSON()).removeObjects(exclusions || []);
    var values = data.map(function (model) {
      // no undefined
      return Object.values(model.getProperties.apply(model, _toConsumableArray(keys))).map(function (value) {
        return value || '';
      });
    });
    values.unshift(keys);
    return values;
  }
});
define('cityxcity/utils/functions', ['exports', 'ember-string-helpers/utils/functions'], function (exports, _functions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _functions.default;
    }
  });
});
define("cityxcity/utils/get-latest", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getLatest;
  function getLatest(prop, context) {
    var property = context.get(prop);
    if (property) {
      property = JSON.parse(property);
      return property.sortBy(function (el) {
        return moment(el.date);
      })[property.length - 1].status;
    } else {
      return [];
    }
  }
});
define('cityxcity/utils/get-promise-content', ['exports', 'ember-promise-tools/utils/get-promise-content'], function (exports, _getPromiseContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getPromiseContent.default;
    }
  });
});
define("cityxcity/utils/is-any-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isAnyFilter;
  function isAnyFilter(typesArray, field, model) {
    var value = model.get(field);
    if (typeof typesArray === 'undefined') throw new Error("is-any-filter: nothing to compare");
    if (typesArray.length <= 1) return true;
    if (value) return typesArray.includes(value);
    return;
  }
});
define('cityxcity/utils/is-fulfilled', ['exports', 'ember-promise-tools/utils/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
});
define('cityxcity/utils/is-longitudinal-filter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLongitudinalFilter;
  function isLongitudinalFilter(selectedDate, longitudinalField, model) {
    if (!selectedDate) return true;

    // selectedDate, longitudinalField, model
    var truthState = 'open';
    var fieldDates = model.get(longitudinalField);
    var sortedDates = fieldDates.sortBy(function (o) {
      return new Date(o.quarter);
    });
    var state = false;

    // what is the status of the selectedDate?
    sortedDates.forEach(function (el, index) {
      var subsequentDate = sortedDates[index + 1];

      // is there a subsequent date or is this the last?
      if (subsequentDate) {
        var parsedSubsequentDate = new Date(selectedDate);

        // is the selected date greater than the current element date and less than the subsequent element date? 
        if (selectedDate > el.quarter && selectedDate < subsequentDate.quarter) {
          if (el.status == truthState) {
            state = true;
          }
        }
      } else {
        // it's the last in the array anyway, check its truth state
        if (el.status == truthState) {
          state = true;
        }
      }
    });

    return state;
  }
});
define('cityxcity/utils/is-promise', ['exports', 'ember-promise-tools/utils/is-promise'], function (exports, _isPromise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPromise.default;
    }
  });
});
define("cityxcity/utils/is-true-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isTrueFilter;
  function isTrueFilter(filter, field, model) {
    if (!filter) return true;
    return model.get(field) === filter;
  }
});
define("cityxcity/utils/is-within-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isWithinFilter;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function isWithinFilter(minMaxArray, field, model) {
    var _minMaxArray = _slicedToArray(minMaxArray, 2),
        min = _minMaxArray[0],
        max = _minMaxArray[1];

    if (!(min && max)) return true;
    var value = model.get(field);
    return value >= min && value <= max;
  }
});
define('cityxcity/utils/months-between', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = monthsBetween;
  function monthsBetween(dateStart, dateEnd, format) {
    var timeValues = [];
    if (!format) format = 'YYYY-MM';
    dateStart = moment(dateStart);
    dateEnd = moment(dateEnd);

    while (dateEnd > dateStart) {
      timeValues.push({ date: dateStart.toDate(), alias: dateStart.format(format) });
      dateStart.add(1, 'month');
    }
    return timeValues;
  }
});
define("cityxcity/utils/set-choropleth-color", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = setChoroplethColor;
  function setChoroplethColor(feature, choroplethLayer, CONFIG) {
    var color = void 0;
    CONFIG.forEach(function (config) {
      if (config.setName == choroplethLayer) {
        if (config.default_color) {
          color = config.default_color;
        }
        config.colorMap.forEach(function (mapping) {
          if (mapping.value == feature.properties[mapping.key]) {
            color = mapping.color;
          }
        });
      }
    });
    return color;
  }
});
define('cityxcity/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/smart-resolve'], function (exports, _smartResolve) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _smartResolve.default;
    }
  });
});
define('cityxcity/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});


define('cityxcity/config/environment', ['ember'], function(Ember) {
  var prefix = 'cityxcity';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("cityxcity/app")["default"].create({"filters":[{"name":"investment_type_code","type":"list","table":"investments","alias":"investmentType"},{"name":"value","type":"range","table":"investments","alias":"value"},{"name":"bld_area","type":"range","table":"parcels","alias":"bld_area"},{"name":"tdi_land_use","type":"type","table":"parcels","alias":"tdi_land_use"},{"name":"tdi_for_sale","type":"boolean","table":"parcels","alias":"tdi_for_sale"},{"name":"tdi_for_lease","type":"boolean","table":"parcels","alias":"tdi_for_lease"},{"name":"year_built","type":"range","table":"parcels","alias":"year_built"},{"name":"activating","type":"boolean","table":"features","alias":"featureActivating"},{"name":"type_code","type":"list","alias":"featureType","table":"features"},{"name":"employer","type":"boolean","alias":"employer","table":"features"}],"domains":{"featureType":{"name":"featureType","domain":{"codedValues":[{"name":"Office","code":1},{"name":"Public Transit","code":2},{"name":"Park / Open Space","code":3},{"name":"Community","code":4},{"name":"Civic Institution ","code":5},{"name":"Health Care","code":6},{"name":"Parking","code":7},{"name":"Cultural / Entertainment","code":8},{"name":"Temporary","code":9},{"name":"Food Sales","code":10},{"name":"Retail","code":11},{"name":"Civic Institution","code":12},{"name":"Education","code":13},{"name":"Residential","code":14}]},"editable":true,"nullable":false},"investmentType":{"name":"featureType","domain":{"codedValues":[{"name":"equity","code":1},{"name":"private","code":2},{"name":"public","code":3}]}}},"name":"cityxcity","version":"0.0.0+375faefb"});
}
//# sourceMappingURL=cityxcity.map
