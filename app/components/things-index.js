import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    loadThings() {
      var store = this.get('store');
      store.unloadAll();
      store.findAll('thing', { reload: true });
    }
  }
});
