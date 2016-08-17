import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
import './shared/rxjs-extensions';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import {
  APP_SHARED_PROVIDERS,
  InitCapsPipe,
  ModalComponent,
  NavComponent,
  SpeakerService,
  SpinnerComponent,
  ToastComponent
} from '../app/shared';

import { SortSpeakersPipe } from './speakers/shared';

/* Feature Modules */
// import { ContactModule }  from './contact/contact.module';
// import { SharedModule }   from './shared/shared.module';
import { routing, APP_ROUTER_PROVIDERS }        from './routing/app.routes'; // move to app.routing.ts   //TODO ???

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
    // ContactModule,
    // routing,
    // SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    NavComponent,
    SpinnerComponent,
    ToastComponent,
    InitCapsPipe,
    SortSpeakersPipe, //TODO: move to its own module later ?
  ],
  providers: [
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } },
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryStoreService },     // in-mem server data
    SpeakerService,
    APP_SHARED_PROVIDERS,
    APP_ROUTER_PROVIDERS,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

