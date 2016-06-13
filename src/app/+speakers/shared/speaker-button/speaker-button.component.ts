import {Component, Input, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Speaker} from '../../../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-speaker-button',
  templateUrl: 'speaker-button.component.html',
  styleUrls: ['speaker-button.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakerButtonComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() {}

  ngOnInit() {
  }

}
