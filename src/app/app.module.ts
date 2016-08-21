import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';

import './shared/rxjs-extensions';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import { routing } from './routing/app.routing';
import { SpeakerService } from './models';

/* Feature Modules */
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    routing,
    SharedModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } },
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryStoreService },   // in-mem server data
    SpeakerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
