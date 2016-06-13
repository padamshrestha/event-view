import {Component, Input, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Session} from '../';
import {InitCapsPipe} from '../../../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-session-button',
  templateUrl: 'session-button.component.html',
  styleUrls: ['session-button.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [InitCapsPipe],
})
export class SessionButtonComponent implements OnInit {
  @Input() session: Session;

  constructor() {}

  ngOnInit() {}
}
