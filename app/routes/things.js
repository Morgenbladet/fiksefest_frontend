import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let things = this.store.peekAll('thing');
    if (things.get('length') == 0 || params.reload) {
      this.store.unloadAll();
      return this.store.findAll('thing');
    } else {
      return this.store.peekAll('thing');
    }
  }
});
