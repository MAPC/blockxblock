'use strict';

define('cityxcity/tests/acceptance/user-can-filter-features-assets-and-parcels-test', ['mocha', 'chai', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  var RELATED_FEATURES_CHECKBOX = '.filters .features-checkbox .checkbox';
  var RELATED_INVESTMENTS_CHECKBOX = '.filters .investments-checkbox .checkbox';
  // const RELATED_PARCELS_CHECKBOX = '.filters .parcels-checkbox';
  var FEATURES_CARDS = '.city-details .feature-card';
  var INVESTMENTS_CARDS = '.city-details .investment-card';
  var FEATURE_TYPE_FILTER = '.feature-types .checkbox';
  var BOOLEAN_FILTER = '.other-categories .checkbox';

  var INVESTMENT_TYPE_FILTER = '.investments-types .checkbox';

  // const PARCELS_TYPES_FILTER = '.investment-types .checkbox';
  // const PARCELS_BOOLEAN_FILTER = '.parcels-categories .checkbox';

  (0, _mocha.describe)('Acceptance | user can filter features assets and parcels', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('with features selected', function () {
      (0, _mocha.beforeEach)(function () {
        server.createList('city', 1);
        visit('/cities/1/details');
        click(RELATED_FEATURES_CHECKBOX);
      });
      // server.createList('city', 2);
      (0, _mocha.it)('shows all available unfiltered features', function () {

        var features = find(FEATURES_CARDS);
        (0, _chai.expect)(features).to.have.length(11);
      });

      (0, _mocha.describe)('uses types filter', function () {
        (0, _mocha.beforeEach)(function () {
          click(FEATURE_TYPE_FILTER);
        });

        (0, _mocha.it)('shows filtered features', function () {
          var features = find(FEATURES_CARDS);

          (0, _chai.expect)(features).to.have.length(1);
        });
      });

      (0, _mocha.describe)('uses boolean filter', function () {
        (0, _mocha.beforeEach)(function () {
          click(BOOLEAN_FILTER);
        });

        (0, _mocha.it)('shows filtered features', function () {
          var features = find(FEATURES_CARDS);

          // the unit tests might be the ones to test for record-level
          // filtering accuracy
          (0, _chai.expect)(features.length).to.be.below(11);
        });
      });
    });

    (0, _mocha.describe)('with assets selected', function () {
      (0, _mocha.beforeEach)(function () {
        server.createList('city', 1);
        visit('/cities/1/details');
        click(RELATED_INVESTMENTS_CHECKBOX);
      });
      // server.createList('city', 2);
      (0, _mocha.it)('shows all available unfiltered investments', function () {
        var investments = find(INVESTMENTS_CARDS);

        (0, _chai.expect)(investments).to.have.length(11);
      });

      (0, _mocha.describe)('uses types filter', function () {
        (0, _mocha.beforeEach)(function () {
          click(INVESTMENT_TYPE_FILTER);
        });

        (0, _mocha.it)('shows filtered investments', function () {
          var investments = find(INVESTMENTS_CARDS);

          (0, _chai.expect)(investments).to.have.length(3);
        });
      });
    });

    (0, _mocha.describe)('with parcels selected', function () {
      // server.createList('city', 2);
      (0, _mocha.it)('shows all available unfiltered features');
    });
  });
});
define('cityxcity/tests/acceptance/user-can-view-index-page-test', ['mocha', 'chai', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | user can view index page', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      server.createList('city', 10);
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.beforeEach)(function () {
      visit('/');
    });

    (0, _mocha.it)('can visit /', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    (0, _mocha.it)('show a grid of city names on home page');
  });
});
define('cityxcity/tests/acceptance/user-can-visit-cities-page-test', ['mocha', 'chai', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  // selectors
  var CITIES = '.ui.menu a.item';
  var CITIES_LINK = '.cities-link';

  (0, _mocha.describe)('Acceptance | user can visit cities page', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('with cities', function () {
      (0, _mocha.beforeEach)(function () {
        server.createList('city', 2);
        visit('/');
      });

      (0, _mocha.it)('shows two cities', function () {

        var cities = find(CITIES);

        // return 
        (0, _chai.expect)(cities).to.have.length(2);
      });

      (0, _mocha.describe)('click cities link', function () {
        (0, _mocha.beforeEach)(function () {
          // pauseTest();
          click(CITIES_LINK);
        });

        (0, _mocha.it)("doesn't show cities", function () {
          (0, _chai.expect)(currentURL()).to.equal('/cities');
        });

        (0, _mocha.it)("shows a map", function () {
          (0, _chai.expect)(find('.leaflet-container').height()).to.be.above(0);
          (0, _chai.expect)(find('.leaflet-container').width()).to.be.above(0);
        });
        (0, _mocha.it)("show a sidebar", function () {
          (0, _chai.expect)(find('.cities-sidebar')).to.be.ok;
        });
      });
    });

    (0, _mocha.describe)('without cities', function () {
      (0, _mocha.beforeEach)(function () {
        visit('/');
      });

      (0, _mocha.it)("doesn't show cities", function () {
        var cities = find(CITIES);

        (0, _chai.expect)(cities).to.have.length(0);
      });
    });
  });
});
define('cityxcity/tests/acceptance/user-clicks-city-and-sees-city-detail-on-map-test', ['mocha', 'chai', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  var CITY_LINK = '.ui.menu a.item';
  var CITY_DETAIL_NAME = '.cities-sidebar h1';
  var CITY_MARKER = '.leaflet-marker-icon';

  (0, _mocha.describe)('Acceptance | user clicks city and sees city detail on map', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('with cities', function () {
      // let city;
      // let second_city;
      (0, _mocha.beforeEach)(function () {
        server.create('city', { name: 'Worcester' });
        // second_city = server.create('city', { name: 'Springfield' });
        visit('/');
      });

      (0, _mocha.describe)('click a city', function () {
        (0, _mocha.beforeEach)(function () {
          click(CITY_LINK);
        });

        (0, _mocha.it)('shows city detail', function () {
          // let city_name = city.name;
          (0, _chai.expect)(find(CITY_DETAIL_NAME).text()).to.equal('Worcester');
        });

        (0, _mocha.it)('shows city marker', function () {
          (0, _chai.expect)(find(CITY_MARKER)).to.be.ok;
        });

        // describe('clicks another marker and transitions route', function() {
        //   let second_marker = $(CITY_MARKER)[1];
        //   click(second_marker);

        //   it('transitions route', function() {
        //     expect(currentURL()).to.be('/cities/2');
        //   });

        //   it('recenters map', function() {
        //     let controller = application.getController("cities");
        //     let latitude = controller.get('latitude');

        //     expect(latitude).to.equal(second_city.latitude);

        //   });
        // });
      });
    });
  });
});
define('cityxcity/tests/acceptance/user-logs-in-and-logs-out-successfully-test', ['mocha', 'chai', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  var LOGIN_LINK = '.login-link';
  var EMAIL_FIELD = '.login-username';
  var PASSWORD_FIELD = '.login-password';
  var LOGIN_BUTTON = '.login-submit';
  var LOGOUT_LINK = '.logout-link';

  (0, _mocha.describe)('Acceptance | user logs in and logs out successfully', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('show index', function () {
      (0, _mocha.beforeEach)(function () {
        server.createList('user', 2);
        visit('/');
      });

      (0, _mocha.describe)('click login link', function () {
        (0, _mocha.beforeEach)(function () {
          click(LOGIN_LINK);
          fillIn(EMAIL_FIELD, 'user@email.com');
          fillIn(PASSWORD_FIELD, 'user@email.com');
        });

        (0, _mocha.it)("shows login boxes", function () {
          (0, _chai.expect)(currentURL()).to.equal("/login");
        });

        (0, _mocha.describe)('logging in', function () {
          (0, _mocha.beforeEach)(function () {
            click(LOGIN_BUTTON);
          });

          (0, _mocha.it)('logs the user in', function () {
            (0, _chai.expect)(currentURL()).to.equal('/');
            (0, _chai.expect)(find(LOGOUT_LINK).text(), 'Logout');
          });
        });
      });
    });
  });
});
define('cityxcity/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/city.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/city.js should pass ESLint\n\n6:25 - \'modelName\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('adapters/parcel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/parcel.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/accord-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/accord-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/basemap-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/basemap-menu.js should pass ESLint\n\n');
  });

  QUnit.test('components/cities-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cities-grid.js should pass ESLint\n\n');
  });

  QUnit.test('components/city-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/city-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/edit-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/edit-resource.js should pass ESLint\n\n');
  });

  QUnit.test('components/enumerate-properties.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enumerate-properties.js should pass ESLint\n\n');
  });

  QUnit.test('components/export-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/export-data.js should pass ESLint\n\n');
  });

  QUnit.test('components/file-field-progress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-field-progress.js should pass ESLint\n\n');
  });

  QUnit.test('components/file-upload.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/file-upload.js should pass ESLint\n\n10:10 - \'Ember\' is not defined. (no-undef)\n21:30 - \'e\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/footer-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-nav.js should pass ESLint\n\n');
  });

  QUnit.test('components/geojson-to-svg.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/geojson-to-svg.js should pass ESLint\n\n7:9 - \'mapW\' is assigned a value but never used. (no-unused-vars)\n8:9 - \'mapH\' is assigned a value but never used. (no-unused-vars)\n9:22 - \'d3\' is not defined. (no-undef)\n13:16 - \'d3\' is not defined. (no-undef)\n17:15 - \'d3\' is not defined. (no-undef)');
  });

  QUnit.test('components/image-layer.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/image-layer.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/investment-accord.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/investment-accord.js should pass ESLint\n\n');
  });

  QUnit.test('components/main-map.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/main-map.js should pass ESLint\n\n6:9 - \'alias\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/main-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-nav.js should pass ESLint\n\n');
  });

  QUnit.test('components/map-popup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/map-popup.js should pass ESLint\n\n25:16 - \'event\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/new-investment-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-investment-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/over-time-chart.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/over-time-chart.js should pass ESLint\n\n3:10 - \'nest\' is defined but never used. (no-unused-vars)\n24:9 - \'openDates\' is assigned a value but never used. (no-unused-vars)\n57:9 - \'that\' is assigned a value but never used. (no-unused-vars)\n158:39 - \'c3\' is defined but never used. (no-unused-vars)\n161:7 - \'d3\' is not defined. (no-undef)\n162:25 - \'element\' is defined but never used. (no-unused-vars)\n165:7 - \'d3\' is not defined. (no-undef)\n171:12 - \'value\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/parcel-accord.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/parcel-accord.js should pass ESLint\n\n');
  });

  QUnit.test('components/place-accord.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/place-accord.js should pass ESLint\n\n2:9 - \'computed\' is assigned a value but never used. (no-unused-vars)\n8:9 - \'m\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/related-investments-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/related-investments-icon.js should pass ESLint\n\n');
  });

  QUnit.test('components/resource-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/resource-grid.js should pass ESLint\n\n');
  });

  QUnit.test('components/resource-nav-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/resource-nav-menu.js should pass ESLint\n\n');
  });

  QUnit.test('components/search-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/select-association.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/select-association.js should pass ESLint\n\n2:8 - \'isAnyFilter\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/statewide-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/statewide-map.js should pass ESLint\n\n');
  });

  QUnit.test('components/tabbed-results.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tabbed-results.js should pass ESLint\n\n');
  });

  QUnit.test('components/tdi-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tdi-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/timeline-builder.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/timeline-builder.js should pass ESLint\n\n8:29 - \'Em\' is not defined. (no-undef)');
  });

  QUnit.test('components/timeline-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timeline-edit.js should pass ESLint\n\n');
  });

  QUnit.test('components/ui-search.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ui-search.js should pass ESLint\n\n16:7 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/ui-visibility-sticky.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ui-visibility-sticky.js should pass ESLint\n\n13:11 - Duplicate key \'offset\'. (no-dupe-keys)');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/cities.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/cities.js should pass ESLint\n\n41:7 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/cities/city.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cities/city.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/cities/city/investments.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cities/city/investments.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/cities/city/parcels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cities/city/parcels.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/cities/city/places.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/cities/city/places.js should pass ESLint\n\n7:11 - \'m\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/cities/city/show.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/cities/city/show.js should pass ESLint\n\n37:7 - \'$\' is not defined. (no-undef)\n54:23 - \'csvFactory\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/attribute-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/attribute-type.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-types-for.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-types-for.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/humanize-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/humanize-string.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/is-not-empty.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-not-empty.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/replace-with.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/replace-with.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/split-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/split-string.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/component-router-injector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-router-injector.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/sort-by-date.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/sort-by-date.js should pass ESLint\n\n3:78 - Empty block statement. (no-empty)\n17:14 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('mixins/center-map-on-geometry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/center-map-on-geometry.js should pass ESLint\n\n');
  });

  QUnit.test('models/city.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/city.js should pass ESLint\n\n');
  });

  QUnit.test('models/investment.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/investment.js should pass ESLint\n\n79:11 - \'estimated_amount\' is assigned a value but never used. (no-unused-vars)\n79:29 - \'exact_amount\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('models/parcel.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/parcel.js should pass ESLint\n\n80:34 - \'L\' is not defined. (no-undef)\n85:34 - \'L\' is not defined. (no-undef)');
  });

  QUnit.test('models/place.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/place.js should pass ESLint\n\n113:5 - Unexpected console statement. (no-console)\n130:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/add-data.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/cities/city/add-data.js should pass ESLint\n\n6:9 - \'params\' is defined but never used. (no-unused-vars)\n27:20 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/cities/city/edit-feature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/edit-feature.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/edit-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/edit-investment.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/investments.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/investments.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/new-feature.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/cities/city/new-feature.js should pass ESLint\n\n7:9 - \'params\' is defined but never used. (no-unused-vars)\n25:20 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/cities/city/new-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/cities/city/new-investment.js should pass ESLint\n\n6:9 - \'params\' is defined but never used. (no-unused-vars)\n8:9 - \'currentCity\' is assigned a value but never used. (no-unused-vars)\n25:20 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/cities/city/parcels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/parcels.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/places.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/places.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cities/city/places/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cities/city/places/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/place.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/place.js should pass ESLint\n\n');
  });

  QUnit.test('services/current-city.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/current-city.js should pass ESLint\n\n3:26 - \'getFilter\' is defined but never used. (no-unused-vars)\n18:11 - \'PARCEL_OWNERSHIP_TYPES\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('transforms/jsonstring.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/jsonstring.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/timeline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/timeline.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/timelinne.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/timelinne.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass ESLint\n\n14:2 - Unnecessary semicolon. (no-extra-semi)');
  });

  QUnit.test('utils/apply-filter-to.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/apply-filter-to.js should pass ESLint\n\n');
  });

  QUnit.test('utils/arrayify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/arrayify.js should pass ESLint\n\n');
  });

  QUnit.test('utils/csv-factory.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/csv-factory.js should pass ESLint\n\n');
  });

  QUnit.test('utils/get-latest.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/get-latest.js should pass ESLint\n\n5:45 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('utils/is-any-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/is-any-filter.js should pass ESLint\n\n');
  });

  QUnit.test('utils/is-longitudinal-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/is-longitudinal-filter.js should pass ESLint\n\n16:11 - \'parsedSubsequentDate\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('utils/is-true-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/is-true-filter.js should pass ESLint\n\n');
  });

  QUnit.test('utils/is-within-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/is-within-filter.js should pass ESLint\n\n');
  });

  QUnit.test('utils/months-between.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/months-between.js should pass ESLint\n\n4:15 - \'moment\' is not defined. (no-undef)\n5:13 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('utils/set-choropleth-color.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/set-choropleth-color.js should pass ESLint\n\n');
  });
});
define('cityxcity/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('cityxcity/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'cityxcity/tests/helpers/start-app', 'cityxcity/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('cityxcity/tests/helpers/resolver', ['exports', 'cityxcity/resolver', 'cityxcity/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('cityxcity/tests/helpers/start-app', ['exports', 'cityxcity/app', 'cityxcity/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('cityxcity/tests/integration/components/accord-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('accord-item', 'Integration | Component | accord item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "vrRWSKpB",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"accord-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "VVzFsRX4",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"accord-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/basemap-menu-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('basemap-menu', 'Integration | Component | basemap menu', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#basemap-menu}}
      //     template content
      //   {{/basemap-menu}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "wAozCqvo",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"basemap-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/cities-grid-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('cities-grid', 'Integration | Component | cities grid', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#cities-grid}}
      //     template content
      //   {{/cities-grid}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "iGM94F0E",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"cities-grid\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/city-card-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('city-card', 'Integration | Component | city card', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#city-card}}
      //     template content
      //   {{/city-card}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "X1Haicu4",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"city-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/edit-resource-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('edit-resource', 'Integration | Component | edit resource', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#edit-resource}}
      //     template content
      //   {{/edit-resource}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "VgVBsyS2",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"edit-resource\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/enumerate-properties-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('enumerate-properties', 'Integration | Component | enumerate properties', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#enumerate-properties}}
      //     template content
      //   {{/enumerate-properties}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "yvexL0zz",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"enumerate-properties\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/export-data-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('export-data', 'Integration | Component | export data', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#export-data}}
      //     template content
      //   {{/export-data}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "OdOQxm33",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"export-data\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/file-field-progress-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('file-field-progress', 'Integration | Component | file field progress', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#file-field-progress}}
      //     template content
      //   {{/file-field-progress}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "Dk25nXP3",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"file-field-progress\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/file-upload-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('file-upload', 'Integration | Component | file upload', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#file-upload}}
      //     template content
      //   {{/file-upload}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "aj90Kxhq",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"file-upload\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/footer-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('footer-nav', 'Integration | Component | footer nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "r6+SqBYp",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"footer-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "iEw2OO2r",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"footer-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/geojson-to-svg-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('geojson-to-svg', 'Integration | Component | geojson to svg', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#geojson-to-svg}}
      //     template content
      //   {{/geojson-to-svg}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "2yj2lhHc",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"geojson-to-svg\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/image-layer-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('image-layer', 'Integration | Component | image layer', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#image-layer}}
      //     template content
      //   {{/image-layer}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "OyVwU2SK",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"image-layer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/investment-accord-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('investment-accord', 'Integration | Component | investment accord', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1vMJEIVw",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"investment-accord\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Vya8w4Uq",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"investment-accord\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/leaflet-map-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('leaflet-map', 'Integration | Component | leaflet map', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#leaflet-map}}
      //     template content
      //   {{/leaflet-map}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "pvbFmyCg",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"leaflet-map\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/main-map-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('main-map', 'Integration | Component | main map', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#main-map}}
      //     template content
      //   {{/main-map}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "LvnG1c3q",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"main-map\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/main-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('main-nav', 'Integration | Component | main nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PCHf5sYH",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"main-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "J7wxiES6",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"main-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/map-popup-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('map-popup', 'Integration | Component | map popup', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#map-popup}}
      //     template content
      //   {{/map-popup}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "JDPlVm3v",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"map-popup\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/new-investment-form-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('new-investment-form', 'Integration | Component | new investment form', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#new-investment-form}}
      //     template content
      //   {{/new-investment-form}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "M5MigHkP",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"new-investment-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/over-time-chart-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('over-time-chart', 'Integration | Component | over time chart', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#over-time-chart}}
      //     template content
      //   {{/over-time-chart}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "f7dYiwLs",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"over-time-chart\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/parcel-accord-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('parcel-accord', 'Integration | Component | parcel accord', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "2OjNNZzx",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"parcel-accord\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tKq3HVpR",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"parcel-accord\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/place-accord-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('place-accord', 'Integration | Component | place accord', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "6IkHlT3V",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"place-accord\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "77p48a/z",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"place-accord\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/popup-layer-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('popup-layer', 'Integration | Component | popup layer', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#popup-layer}}
      //     template content
      //   {{/popup-layer}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "kZP+tppj",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"popup-layer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/related-investments-icon-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('related-investments-icon', 'Integration | Component | related investments icon', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#related-investments-icon}}
      //     template content
      //   {{/related-investments-icon}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "f8pE/LGI",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"related-investments-icon\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/resource-grid-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('resource-grid', 'Integration | Component | resource grid', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#resource-grid}}
      //     template content
      //   {{/resource-grid}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "JnpM7O0b",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"resource-grid\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/resource-nav-menu-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('resource-nav-menu', 'Integration | Component | resource nav menu', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#resource-nav-menu}}
      //     template content
      //   {{/resource-nav-menu}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "VE/9P2JD",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"resource-nav-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/search-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('search-bar', 'Integration | Component | search bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "tlJ6Y+u+",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"search-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tWxfyg0C",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"search-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('cityxcity/tests/integration/components/select-association-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('select-association', 'Integration | Component | select association', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#select-association}}
      //     template content
      //   {{/select-association}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "8BOSQG6p",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"select-association\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/statewide-map-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('statewide-map', 'Integration | Component | statewide map', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#statewide-map}}
      //     template content
      //   {{/statewide-map}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "x5UOZcRd",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"statewide-map\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/tabbed-results-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('tabbed-results', 'Integration | Component | tabbed results', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#tabbed-results}}
      //     template content
      //   {{/tabbed-results}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "BrcrzMKx",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tabbed-results\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/tdi-card-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('tdi-card', 'Integration | Component | tdi card', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#tdi-card}}
      //     template content
      //   {{/tdi-card}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "qi+4spWw",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tdi-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/timeline-builder-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('timeline-builder', 'Integration | Component | timeline builder', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#timeline-builder}}
      //     template content
      //   {{/timeline-builder}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "+OZblLzZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"timeline-builder\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/timeline-edit-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('timeline-edit', 'Integration | Component | timeline edit', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#timeline-edit}}
      //     template content
      //   {{/timeline-edit}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "Jsi0+JxA",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"timeline-edit\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/ui-search-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('ui-search', 'Integration | Component | ui search', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ui-search}}
      //     template content
      //   {{/ui-search}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "aV/qFZuk",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"ui-search\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/integration/components/ui-visibility-sticky-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeComponent)('ui-visibility-sticky', 'Integration | Component | ui visibility sticky', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ui-visibility-sticky}}
      //     template content
      //   {{/ui-visibility-sticky}}
      // `);

      this.render(Ember.HTMLBars.template({
        "id": "ZpPx2MF4",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"ui-visibility-sticky\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('cityxcity/tests/test-helper', ['cityxcity/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('cityxcity/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/user-can-filter-features-assets-and-parcels-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/user-can-filter-features-assets-and-parcels-test.js should pass ESLint\n\n32:7 - \'server\' is not defined. (no-undef)\n74:7 - \'server\' is not defined. (no-undef)');
  });

  QUnit.test('acceptance/user-can-view-index-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/user-can-view-index-page-test.js should pass ESLint\n\n11:5 - \'server\' is not defined. (no-undef)');
  });

  QUnit.test('acceptance/user-can-visit-cities-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/user-can-visit-cities-page-test.js should pass ESLint\n\n23:7 - \'server\' is not defined. (no-undef)');
  });

  QUnit.test('acceptance/user-clicks-city-and-sees-city-detail-on-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/user-clicks-city-and-sees-city-detail-on-map-test.js should pass ESLint\n\n25:7 - \'server\' is not defined. (no-undef)');
  });

  QUnit.test('acceptance/user-logs-in-and-logs-out-successfully-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/user-logs-in-and-logs-out-successfully-test.js should pass ESLint\n\n25:7 - \'server\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/accord-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/accord-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/basemap-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/basemap-menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/cities-grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/cities-grid-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/city-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/city-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/edit-resource-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-resource-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/enumerate-properties-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/enumerate-properties-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/export-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/export-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/file-field-progress-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/file-field-progress-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/file-upload-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/file-upload-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/footer-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/geojson-to-svg-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/geojson-to-svg-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/image-layer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/image-layer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/investment-accord-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/investment-accord-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/leaflet-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/leaflet-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/main-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/main-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/map-popup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/map-popup-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/new-investment-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-investment-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/over-time-chart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/over-time-chart-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/parcel-accord-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/parcel-accord-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/place-accord-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/place-accord-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/popup-layer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/popup-layer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/related-investments-icon-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/related-investments-icon-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/resource-grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/resource-grid-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/resource-nav-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/resource-nav-menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/search-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/select-association-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/select-association-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/statewide-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/statewide-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tabbed-results-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tabbed-results-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tdi-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tdi-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/timeline-builder-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/timeline-builder-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/timeline-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/timeline-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ui-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ui-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ui-visibility-sticky-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ui-visibility-sticky-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/city-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/city-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/feature-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/feature-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/parcel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/parcel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/city-filters-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/city-filters-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/edit-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/edit-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/edit-parcel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/edit-parcel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/features-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/features-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/investments-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/investments-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/parcels-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/parcels-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/cities/city/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cities/city/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/attribute-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/attribute-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/consruct-related-investments-markup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/consruct-related-investments-markup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/get-types-for-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/get-types-for-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/humanize-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/humanize-string-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/is-not-empty-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-not-empty-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/replace-with-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/replace-with-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/split-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/split-string-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/component-router-injector-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/initializers/component-router-injector-test.js should pass ESLint\n\n17:3 - \'afterEach\' is not defined. (no-undef)');
  });

  QUnit.test('unit/initializers/sort-by-date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/initializers/sort-by-date-test.js should pass ESLint\n\n17:3 - \'afterEach\' is not defined. (no-undef)');
  });

  QUnit.test('unit/mixins/center-map-on-geometry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/center-map-on-geometry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/city-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/city-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/feature-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/feature-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/parcel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/parcel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/add-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/add-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/edit-feature-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/edit-feature-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/edit-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/edit-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/edit-parcel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/edit-parcel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/features-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/features-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/features/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/features/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/investments-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/investments-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/new-feature-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/new-feature-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/new-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/new-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cities/city/parcels-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cities/city/parcels-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/district-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/district-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/place-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/place-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/current-city-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-city-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/timeline-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/timeline-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/timelinne-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/timelinne-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/apply-filter-to-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/apply-filter-to-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/arrayify-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/arrayify-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/csv-factory-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/csv-factory-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/get-latest-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/get-latest-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/is-any-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-any-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/is-longitudinal-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-longitudinal-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/is-true-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-true-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/is-within-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-within-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/months-between-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/months-between-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/set-choropleth-color-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/set-choropleth-color-test.js should pass ESLint\n\n');
  });
});
define('cityxcity/tests/unit/adapters/application-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/adapters/city-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('adapter:city', 'Unit | Adapter | city', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/adapters/feature-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('adapter:feature', 'Unit | Adapter | feature', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/adapters/investment-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('adapter:investment', 'Unit | Adapter | investment', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/adapters/parcel-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('adapter:parcel', 'Unit | Adapter | parcel', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/application-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities', 'Unit | Controller | cities', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city', 'Unit | Controller | cities/city', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/city-filters-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/show', 'Unit | Controller | cities/city/city filters', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/edit-investment-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/edit-investment', 'Unit | Controller | cities/city/edit investment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/edit-parcel-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/edit-parcel', 'Unit | Controller | cities/city/edit parcel', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/features-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/features', 'Unit | Controller | cities/city/features', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/investments-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/investments', 'Unit | Controller | cities/city/investments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/parcels-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/parcels', 'Unit | Controller | cities/city/parcels', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/controllers/cities/city/show-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('controller:cities/city/show', 'Unit | Controller | cities/city/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/attribute-type-test', ['chai', 'mocha', 'cityxcity/helpers/attribute-type'], function (_chai, _mocha, _attributeType) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | attribute type', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _attributeType.attributeType)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/consruct-related-investments-markup-test', ['chai', 'mocha', 'cityxcity/helpers/consruct-related-investments-markup'], function (_chai, _mocha, _consructRelatedInvestmentsMarkup) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | consruct related investments markup', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _consructRelatedInvestmentsMarkup.consructRelatedInvestmentsMarkup)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/get-types-for-test', ['chai', 'mocha', 'cityxcity/helpers/get-types-for'], function (_chai, _mocha, _getTypesFor) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | get types for', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _getTypesFor.getTypesFor)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/humanize-string-test', ['chai', 'mocha', 'cityxcity/helpers/humanize-string'], function (_chai, _mocha, _humanizeString) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | humanize string', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _humanizeString.humanizeString)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/is-not-empty-test', ['chai', 'mocha', 'cityxcity/helpers/is-not-empty'], function (_chai, _mocha, _isNotEmpty) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | is not empty', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _isNotEmpty.isNotEmpty)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/replace-with-test', ['chai', 'mocha', 'cityxcity/helpers/replace-with'], function (_chai, _mocha, _replaceWith) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | replace with', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _replaceWith.replaceWith)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/helpers/split-string-test', ['chai', 'mocha', 'cityxcity/helpers/split-string'], function (_chai, _mocha, _splitString) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | split string', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _splitString.splitString)(42);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/initializers/component-router-injector-test', ['chai', 'mocha', 'cityxcity/initializers/component-router-injector', 'cityxcity/tests/helpers/destroy-app'], function (_chai, _mocha, _componentRouterInjector, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Unit | Initializer | component router injector', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      Ember.run(function () {
        application = Ember.Application.create();
        application.deferReadiness();
      });
    });

    afterEach(function () {
      (0, _destroyApp.default)(application);
    });

    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      (0, _componentRouterInjector.initialize)(application);

      // you would normally confirm the results of the initializer here
      (0, _chai.expect)(true).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/initializers/sort-by-date-test', ['chai', 'mocha', 'cityxcity/initializers/sort-by-date', 'cityxcity/tests/helpers/destroy-app'], function (_chai, _mocha, _sortByDate, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Unit | Initializer | sort by date', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      Ember.run(function () {
        application = Ember.Application.create();
        application.deferReadiness();
      });
    });

    afterEach(function () {
      (0, _destroyApp.default)(application);
    });

    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      (0, _sortByDate.initialize)(application);

      // you would normally confirm the results of the initializer here
      (0, _chai.expect)(true).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/mixins/center-map-on-geometry-test', ['chai', 'mocha', 'cityxcity/mixins/center-map-on-geometry'], function (_chai, _mocha, _centerMapOnGeometry) {
  'use strict';

  (0, _mocha.describe)('Unit | Mixin | center map on geometry', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var CenterMapOnGeometryObject = Ember.Object.extend(_centerMapOnGeometry.default);
      var subject = CenterMapOnGeometryObject.create();
      (0, _chai.expect)(subject).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/models/city-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('city', 'Unit | Model | city', {
    // Specify the other units that are required for this test.
    needs: ['model:feature', 'model:investment', 'model:parcel']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/models/feature-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('feature', 'Unit | Model | feature', {
    // Specify the other units that are required for this test.
    needs: ['model:city']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/models/investment-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('investment', 'Unit | Model | investment', {
    // Specify the other units that are required for this test.
    needs: ['model:city']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/models/parcel-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('parcel', 'Unit | Model | parcel', {
    // Specify the other units that are required for this test.
    needs: ['model:city']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/models/user-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities', 'Unit | Route | cities', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city', 'Unit | Route | cities/city', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/add-data-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/add-data', 'Unit | Route | cities/city/add data', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/edit-feature-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/edit-feature', 'Unit | Route | cities/city/edit feature', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/edit-investment-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/edit-investment', 'Unit | Route | cities/city/edit investment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/edit-parcel-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/edit-parcel', 'Unit | Route | cities/city/edit parcel', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/features-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/features', 'Unit | Route | cities/city/features', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/features/index-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/features/index', 'Unit | Route | cities/city/features/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/investments-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/investments', 'Unit | Route | cities/city/investments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/new-feature-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/new-feature', 'Unit | Route | cities/city/new feature', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/new-investment-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/new-investment', 'Unit | Route | cities/city/new investment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/routes/cities/city/parcels-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('route:cities/city/parcels', 'Unit | Route | cities/city/parcels', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/serializers/district-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('district', 'Unit | Serializer | district', {
    // Specify the other units that are required for this test.
    needs: ['serializer:district']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('serializes records', function () {
      var record = this.subject();

      var serializedRecord = record.serialize();

      (0, _chai.expect)(serializedRecord).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/serializers/place-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModel)('place', 'Unit | Serializer | place', {
    // Specify the other units that are required for this test.
    needs: ['serializer:place']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('serializes records', function () {
      var record = this.subject();

      var serializedRecord = record.serialize();

      (0, _chai.expect)(serializedRecord).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/services/current-city-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('service:current-city', 'Unit | Service | current city', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var service = this.subject();
      (0, _chai.expect)(service).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/transforms/timeline-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('transform:timeline', 'Unit | Transform | timeline', {
    // Specify the other units that are required for this test.
    // needs: ['transform:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var transform = this.subject();
      (0, _chai.expect)(transform).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/transforms/timelinne-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  (0, _emberMocha.describeModule)('transform:timelinne', 'Unit | Transform | timelinne', {
    // Specify the other units that are required for this test.
    // needs: ['transform:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var transform = this.subject();
      (0, _chai.expect)(transform).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/apply-filter-to-test', ['chai', 'mocha', 'cityxcity/utils/apply-filter-to'], function (_chai, _mocha, _applyFilterTo) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | apply filter to', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _applyFilterTo.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/arrayify-test', ['chai', 'mocha', 'cityxcity/utils/arrayify'], function (_chai, _mocha, _arrayify) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | arrayify', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _arrayify.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/csv-factory-test', ['chai', 'mocha', 'cityxcity/utils/csv-factory'], function (_chai, _mocha, _csvFactory) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | csv factory', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _csvFactory.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/get-latest-test', ['chai', 'mocha', 'cityxcity/utils/get-latest'], function (_chai, _mocha, _getLatest) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | get latest', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _getLatest.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/is-any-filter-test', ['chai', 'mocha', 'cityxcity/utils/is-any-filter'], function (_chai, _mocha, _isAnyFilter) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | is any filter', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _isAnyFilter.default)([]);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/is-longitudinal-filter-test', ['chai', 'mocha', 'cityxcity/utils/is-longitudinal-filter'], function (_chai, _mocha, _isLongitudinalFilter) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | is longitudinal filter', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _isLongitudinalFilter.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/is-true-filter-test', ['chai', 'mocha', 'cityxcity/utils/is-true-filter'], function (_chai, _mocha, _isTrueFilter) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | is true filter', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _isTrueFilter.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/is-within-filter-test', ['chai', 'mocha', 'cityxcity/utils/is-within-filter'], function (_chai, _mocha, _isWithinFilter) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | is within filter', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _isWithinFilter.default)([]);
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/months-between-test', ['chai', 'mocha', 'cityxcity/utils/months-between'], function (_chai, _mocha, _monthsBetween) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | months between', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _monthsBetween.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
define('cityxcity/tests/unit/utils/set-choropleth-color-test', ['chai', 'mocha', 'cityxcity/utils/set-choropleth-color'], function (_chai, _mocha, _setChoroplethColor) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | set choropleth color', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _setChoroplethColor.default)();
      (0, _chai.expect)(result).to.be.ok;
    });
  });
});
require('cityxcity/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
