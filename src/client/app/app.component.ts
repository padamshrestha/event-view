import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { DashboardComponent } from './+dashboard/dashboard.component';
import { SessionsComponent } from './+sessions/sessions.component';
import { SpeakersComponent } from './+speakers/speakers.component';

import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api/core';
import { InMemoryStoryService } from '../api/in-memory-story.service';
import {
  BLOCK_PROVIDERS,
  ModalComponent,
  NavComponent,
  SpeakerService,
  SpinnerComponent,
  ToastComponent
} from '../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ModalComponent,
    NavComponent,
    SpinnerComponent,
    ToastComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryStoryService }),
    provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
    ROUTER_PROVIDERS,
    SpeakerService,
    BLOCK_PROVIDERS
  ]
})
@Routes([
  { path: '/', /* '/dashboard',*/ component: DashboardComponent },
  { path: '/dashboard', /* '/dashboard',*/ component: DashboardComponent },
  { path: '/sessions', component: SessionsComponent },
  { path: '/speakers', component: SpeakersComponent }
])
export class AppComponent { }

// loader: () => window['System'].import('app/+dashboard')
//   .then((module: any) => module.DashboardComponent),
// useAsDefault: true
