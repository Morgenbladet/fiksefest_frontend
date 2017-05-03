import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('things', { path: '/' });
  this.route('thing', { path: '/thing/:thing_id' });
  this.route('new_thing', { path: '/new_thing' });
  this.route('takk',  { path: '/takk' });
  this.route('error', {  path: '/error' });
});

export default Router;
