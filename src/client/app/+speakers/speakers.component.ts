import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SpeakerComponent } from './speaker';
import { SpeakerListComponent } from './speaker-list';

@Component({
  selector: 'ev-speakers-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: SpeakerListComponent, /* , useAsDefault: true */ },
  { path: '/list/:id', component: SpeakerListComponent },
  { path: '/:id', component: SpeakerComponent }
])
export class SpeakersComponent { }
