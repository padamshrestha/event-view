import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

// Import all components for this module
import { AppComponent }   from './app.component';
import { DashboardComponent, DashboardButtonComponent } from './dashboard';
import { SessionComponent, SessionButtonComponent, SessionsComponent, SessionListComponent } from './sessions';
import { SpeakerComponent, SpeakerButtonComponent, SpeakersComponent, SpeakerListComponent } from './speakers';
import { LoginComponent } from './login';

import './shared/rxjs-extensions';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import {
  APP_SHARED_PROVIDERS,
  FilterTextComponent,
  InitCapsPipe,
  ModalComponent,
  NavComponent,
  SpeakerService,
  SpinnerComponent,
  ToastComponent
} from '../app/shared';
import { routing } from './routing/app.routing';
import { SortSpeakersPipe } from './speakers/shared';

/* Feature Modules */
// import { ContactModule }  from './contact/contact.module';
// import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ContactModule,
    routing,
    // SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,

    DashboardComponent,
    DashboardButtonComponent,
    FilterTextComponent,
    SessionComponent,
    SessionButtonComponent,
    SessionsComponent,
    SessionListComponent,
    SpeakerComponent,
    SpeakerButtonComponent,
    SpeakersComponent,
    SpeakerListComponent,
    LoginComponent,

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

