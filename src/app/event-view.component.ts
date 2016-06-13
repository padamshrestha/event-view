import {Component, provide} from '@angular/core';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {Router} from '@angular/router';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA,
} from 'angular2-in-memory-web-api/core';

import './shared/rxjs-operators';
import {DashboardComponent} from './+dashboard';
import {SessionsComponent} from './+sessions';
import {SpeakersComponent} from './+speakers';
import {InMemoryStoreService} from '../api/in-memory-store.service';
import {
  APP_SHARED_PROVIDERS,
  ModalComponent,
  NavComponent,
  SpeakerService,
  SpinnerComponent,
  ToastComponent,
} from '../app/shared';

@Component({
  moduleId: module.id,
  selector: 'event-view-app',
  templateUrl: 'event-view.component.html',
  styleUrls: ['event-view.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ModalComponent,
    NavComponent,
    SpinnerComponent,
    ToastComponent,
  ],
  providers: [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: InMemoryBackendService}),
    provide(SEED_DATA, {useClass: InMemoryStoreService}),
    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
    ROUTER_PROVIDERS,
    SpeakerService,
    APP_SHARED_PROVIDERS,
  ]
})
@Routes([
  {path: '/', component: DashboardComponent},
  {path: '/dashboard', component: DashboardComponent},
  {path: '/sessions', component: SessionsComponent},
  {path: '/speakers', component: SpeakersComponent}
])
export class EventViewAppComponent {
  constructor(private router: Router) {
    // TODO: inject it just to force the router to load ... for now
  }
}
