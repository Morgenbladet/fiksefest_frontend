import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  owner: DS.attr('string'),
  imageLinks: DS.attr(),
  image: DS.attr('file'),
  comments: DS.hasMany('comment')
});
