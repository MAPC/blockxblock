import Mirage from 'ember-cli-mirage';
import config from '../config/environment';

export default function() {
  this.namespace = '/api';

  this.get('cities');
  this.get('cities/:id');

  this.post('/upload', function(context,request, test) {
    return {};
  });

  this.get('cities/:id/places', function({ cities }, { params }) {
    let city = cities.findBy({
      id: params.id
    });

    if (!city) {
      return [];
    }

    return city.places;
  });

  this.get('cities/:id/investments', function({ cities }, { params }) {
    let city = cities.findBy({
      id: params.id
    });

    if (!city) {
      return [];
    }

    return city.investments;
  });

  this.get('cities/:id/parcels', function({ cities }, { params }) {
    let city = cities.findBy({
      id: params.id
    });

    if (!city) {
      return [];
    }

    return city.parcels;
  });

  this.get('places', function({ places }) {
    let json = this.serialize(places.all());
    json.meta = {
      "cartodb_query": "SELECT * FROM places WHERE type=1;"
    };
    return json;
  });

  this.get('places/:id');
  this.get('investments/:id');
  this.get('parcels/:id');

  this.post('places');
  this.post('investments');
  this.post('parcels');

  this.patch('places/:id');
  this.patch('investments/:id');
  this.patch('parcels/:id');

  this.post('token', ({ users }, request) => {
    // NOTE: the authenticator sends this as form-encoded. see: https://github.com/simplabs/ember-simple-auth/blob/master/addon/authenticators/oauth2-password-grant.js#L295.
    let parsed = JSON.parse(request.requestBody);
    let { token } = parsed.user;

    let foundUser = users.findBy({
      token
    });

    if (foundUser) {
      let { id } = foundUser;

      return {
        token: id,
        email: foundUser.email
      };
    }

    return new Mirage.Response(401, {}, { error: 'Invalid username or password' });
  });
  // this.get('places/:id', (schema, request) => {
  //   let feature = schema.places.find(request.params.id);
  //   return feature;
  // });

  // this.get('cities/:id/places', (schema, request) => {
  //   let city = schema.cities.find(request.params.id);

  //   return city.places;
  // });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
