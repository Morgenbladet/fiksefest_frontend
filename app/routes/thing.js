import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
		var thing = this.store.findRecord('thing', params.thing_id, { include: 'comments' });
		var comment = this.store.createRecord('comment', { thing: thing });

		return RSVP.hash({
			thing: thing,
			new_comment: comment
		});
  },
	actions: {
		saveComment(newComment) {
      var self = this;
      let id = this.controller.get('model').thing.get('id');

      function printErrors() {
        alert("Kommentaren ble ikke lagret. Alle feltene må fylles ut.");
      }

      function refresh() {
        self.controller.get('model').thing.reload();
      }

      newComment.thing_id = id;
      newComment.save().then(refresh, printErrors);
    },
    willTransition() {
      this.controller.get('model').new_comment.rollbackAttributes();
    }
  }
});
