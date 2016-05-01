(function (global) {

  // TODO: cli should auto-generate this on the fly
  var packages = [
    // 'app',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade',

    // 'rxjs',
    // 'angular2-in-memory-web-api',

    // custom stuff
    // 'app',
    'app/+dashboard',
    'app/+dashboard/dashboard-button',
    'app/+sessions',
    'app/+sessions/session',
    'app/+sessions/session-list',
    'app/+sessions/shared',
    'app/+sessions/shared/session-button',
    'app/+speakers',
    'app/+speakers/speaker',
    'app/+speakers/speaker-list',
    'app/+speakers/shared',
    'app/+speakers/shared/speaker-button',
    'app/shared',
    'app/shared/filter-text',
    'app/shared/modal',
    'app/shared/nav',
    'app/shared/speaker-services',
    'app/shared/spinner',
    'app/shared/toast',
    'app/speakers',
  ].reduce(function (barrelConfig, barrelName) {
    barrelConfig[barrelName] = {
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});

  packages['angular2-in-memory-web-api'] = { defaultExtension: 'js' };
  packages['api'] = { defaultExtension: 'js' };
  packages['app'] = { defaultExtension: 'js', main: 'main' };
  packages['rxjs'] = { defaultExtension: 'js' };

  var config = {
    //map tells the System loader where to look for things
    map: {
      'app': 'app', // 'dist',
      'rxjs': 'node_modules/rxjs',
      '@angular': 'node_modules/@angular',
      'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
    },

    //packages tells the System loader how to load when no filename and/or no extension
    packages: packages
  }

  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
