import DS from 'ember-data';

export default DS.Model.extend({
  tagline: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  content: DS.attr()
});
