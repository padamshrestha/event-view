const packages = {
  // Add your custom SystemJS packages here.
  'angular2-in-memory-web-api': { defaultExtension: 'js' },
  'api': { defaultExtension: 'js' },
  'app': { defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' }
};

const map = {
  'app': 'app', // 'dist',
  'rxjs': 'node_modules/rxjs',
  '@angular': 'node_modules/@angular',
  'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
};

const packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/testing',
  '@angular/upgrade',

  // custom stuff
  'app',
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
  'app/shared/toast'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
  packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

export const config = {
  map: map,
  packages: packages
};
