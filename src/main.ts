// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule }              from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err));

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
