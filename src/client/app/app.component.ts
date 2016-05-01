import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

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
  moduleId: __moduleName,
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
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    loader: () => window['System'].import('app/+dashboard')
      .then((module: any) => module.DashboardComponent),
    useAsDefault: true
  }, {
    path: '/sessions/...',
    name: 'Sessions',
    loader: () => window['System'].import('app/+sessions')
      .then((module: any) => module.SessionsComponent)
  }, {
    path: '/speakers/...',
    name: 'Speakers',
    loader: () => window['System'].import('app/+speakers')
      .then((module: any) => module.SpeakersComponent)
  }
])
export class AppComponent { }
