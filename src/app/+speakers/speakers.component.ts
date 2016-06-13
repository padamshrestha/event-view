import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {SpeakerComponent} from './+speaker';
import {SpeakerListComponent} from './+speaker-list';

@Component({
  moduleId: module.id,
  selector: 'ev-speakers',
  templateUrl: 'speakers.component.html',
  styleUrls: ['speakers.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
@Routes([
  {path: '/', component: SpeakerListComponent},
  {path: '/:id', component: SpeakerComponent},
])
export class SpeakersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
