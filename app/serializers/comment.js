import DS from 'ember-data';
import Application from './application';

export default Application.extend({
  attrs: {
    thing: { serialize: false }
  }
});
