const barrels: string[] = [
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
  'app/shared/toast',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  let result = barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      // format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
  return result;
}

// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'api': { defaultExtension: 'js' },
    'app': { defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
  }, createPackageConfig(barrels)),

  map: {
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
  }
};

// declare var System: any;
// System.config(config);
