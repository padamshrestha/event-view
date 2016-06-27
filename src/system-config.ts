/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'app' : 'app',

  'main': 'main.js',
  '@angular' : 'node_modules/@angular',
  'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api',
  'rxjs' : 'node_modules/rxjs'
};

// packages tells the System loader how to load when no filename and/or no
// extension
const packages: any = {
  'app' : {main : 'main.js', defaultExtension : 'js'},
  'api' : {defaultExtension : 'js'},
  'rxjs' : {defaultExtension : 'js'},
  'angular2-in-memory-web-api' : {main : 'index.js', defaultExtension : 'js'},
};

const barrels: any = [
  // App specific barrels.
  'app/auth',
  'app/shared',
  'app/shared/filter-text',
  'app/shared/modal',
  'app/shared/nav',
  'app/shared/speaker-data',
  'app/shared/spinner',
  'app/shared/toast',
  'app/+dashboard',
  'app/+dashboard/shared',
  'app/+dashboard/shared/dashboard-button',
  'app/+login',
  'app/+sessions',
  'app/+sessions/+session-list',
  'app/+sessions/+session',
  'app/+sessions/shared',
  'app/+sessions/shared/session-button',
  'app/+speakers',
  'app/+speakers/+speaker-list',
  'app/+speakers/+speaker',
  'app/+speakers/shared',
  'app/+speakers/shared/speaker-button',
];

barrels.forEach((barrelName: string) => {
  packages[barrelName] = { main: 'index' };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/

const ngPackageNames: string[] = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  'router-deprecated',
  'upgrade',
];

// Individual files (~300 requests):
function packIndex(pkgName) {
  packages['@angular/' + pkgName] = {
    main : 'index.js',
    defaultExtension : 'js'
  };
}

// Bundled (~40 requests):
function packUmd(pkgName) {
  packages['@angular/' + pkgName] = {
    main : '/bundles/' + pkgName + '.umd.js',
    defaultExtension : 'js'
  };
}

declare var System: any;

// Most environments should use UMD; some (Karma) need the individual index
// files
var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

// Add package entries for angular packages
ngPackageNames.forEach(setPackageConfig);

// No umd for router yet
packages['@angular/router'] = {
  main : 'index.js',
  defaultExtension : 'js'
};

var config = {map : map, packages : packages};

System.config(config);

// const cliSystemConfigPackages: any = {};
// barrels.forEach((barrelName: string) => {
//   cliSystemConfigPackages[barrelName] = { main: 'index' };
// });

// /** Type declaration for ambient System. */
// declare var System: any;

// // Apply the CLI SystemJS configuration.
// System.config({
//   map: {
//     '@angular': 'vendor/@angular',
//     'rxjs': 'vendor/rxjs',
//     'main': 'main.js'
//   },
//   packages: cliSystemConfigPackages
// });

// // Apply the user's configuration.
// System.config({ map, packages });
