declare var System;

var paths = {
  // paths serve as alias
  'npm:': 'node_modules/'
};

// map tells the System loader where to look for things
var map = {
  // our app is within the app folder
  app: 'app',
  'main': 'main.js',
  'ngfactory': 'ngfactory',

  // angular bundles
  '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
  '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
  '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
  '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
  '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

  // angular testing umd bundles
  '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
  '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
  '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
  '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
  '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
  '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
  '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
  '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',

  // other libraries
  'rxjs': 'npm:rxjs',
  'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
};
// packages tells the System loader how to load when no filename and/or no extension
var packages = {
  api: {defaultExtension: 'js'},
  app: {main: 'main.js', defaultExtension: 'js'},
  rxjs: {defaultExtension: 'js'},
  'angular2-in-memory-web-api': {main: './index.js', defaultExtension: 'js'},
  'ngfactory': {main : 'index.js', defaultExtension : 'js'},
};

const barrels: any = [
  // App specific barrels.
  'app/models',
  'app/shared',
];

barrels.forEach((barrelName: string) => {
  packages[barrelName] = { main: 'index' };
});

////////////////////////////////////////////////////////////////////////////////////////////////

const ngPackageNames: string[] = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  'upgrade',
];

// Individual files (~300 requests):
function packIndex(pkgName) {
  packages['@angular/' + pkgName] = {main : 'index.js', defaultExtension : 'js'};
}

// Bundled (~40 requests):
function packUmd(pkgName) {
  packages['@angular/' + pkgName] = {main : '/bundles/' + pkgName + '.umd.js',defaultExtension : 'js'};
}

declare var System: any;

// Most environments should use UMD; some (Karma) need the individual index
// files
var setPackageConfig = packIndex;
// var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

// Add package entries for angular packages
ngPackageNames.forEach(setPackageConfig);

var config = {
  paths: paths,
  map: map,
  packages: packages
};

System.config(config);
