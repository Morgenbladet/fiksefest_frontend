import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
	created_at: DS.attr('date'),
  thing_id: DS.attr('number'),
  thing: DS.belongsTo('thing', { async: true })
});
