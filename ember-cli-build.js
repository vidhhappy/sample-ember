'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    /*----------------------------------------------------------------
    Ember Bootstrap
    ----------------------------------------------------------------*/
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    /*----------------------------------------------------------------
    Ember CLI Babel
    ----------------------------------------------------------------*/
    'ember-cli-babel': {
      optional: [ 'es6.spec.symbols' ],
      includePolyfill: true
    },


    /*----------------------------------------------------------------
    Eslint
    see https://medium.com/@ynotdraw/setup-your-ember-app-with-eslint-quickly-2d7e8a632c88
    ----------------------------------------------------------------*/
    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: 'eslint-rules',
      extensions: ['js'],
    },  
  });

  
  app.import("node_modules/fusioncharts/fusioncharts.js");  
  app.import("node_modules/fusioncharts/fusioncharts.charts.js");  
  app.import("node_modules/fusioncharts/themes/fusioncharts.theme.zune.js");

  return app.toTree();
};
