import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { SpeakerComponent } from './speaker';
import { SpeakerListComponent } from './speaker-list';

@Component({
  selector: 'ev-speakers-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    name: 'Speakers',
    component: SpeakerListComponent,
    useAsDefault: true
  }, {
    path: '/list/:id',
    name: 'Speakers',
    component: SpeakerListComponent
  }, {
    path: '/:id',
    name: 'Speaker',
    component: SpeakerComponent
  }
])
export class SpeakersComponent { }
