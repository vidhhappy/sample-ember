import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('charts', function() {
    this.route('linechart');
  });
  this.route('cancer-types');
  this.route('overview');
});

export default Router;
