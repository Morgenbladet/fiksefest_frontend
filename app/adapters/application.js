import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'fiksefest-frontend/config/environment';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: ENV.REMOTE_HOST,
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
