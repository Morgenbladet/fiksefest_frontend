import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.unloadAll();
    return this.store.findAll('thing');
  }
});
