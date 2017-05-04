import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    return this.infinityModel("thing", { perPage: 3, startingPage: 1, include: 'comments' });
  }
});
