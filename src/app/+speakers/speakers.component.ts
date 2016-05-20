import { Component, OnInit } from '@angular/core';
import { SpeakerListComponent } from './+speaker-list';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { SpeakerComponent } from './+speaker';

@Component({
  moduleId: module.id,
  selector: 'ev-speakers',
  templateUrl: 'speakers.component.html',
  styleUrls: ['speakers.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: SpeakerListComponent},
  {path: '/:id', component: SpeakerComponent}
])
export class SpeakersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
