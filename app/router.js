var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('about', { path: '/' });
  this.resource('post', { path: '/post/:post_id' });
  this.resource('post.new', { path: '/post/new' });
  this.resource('emotions');
  this.resource('emotion', { path: '/emotion/:emotion' });
  this.resource('users');
});

export default Router;
