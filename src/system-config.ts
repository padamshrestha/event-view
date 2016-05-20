/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',
};

/** User packages configuration. */
const packages: any = {
  'angular2-in-memory-web-api': { defaultExtension: 'js', main: 'index' },
  'api': { defaultExtension: 'js' },
  'app': { defaultExtension: 'js' },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
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
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
