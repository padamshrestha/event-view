import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import {
  EntityService,
  ModalService,
  Speaker,
  SpeakerService,
  ToastService
} from '../../../app/shared';

@Component({
  moduleId: __moduleName,
  selector: 'ev-speaker',
  templateUrl: 'speaker.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakerComponent implements CanDeactivate, OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  @Input() speaker: Speaker;
  editSpeaker: Speaker = <Speaker>{};

  constructor(
    private speakerService: SpeakerService,
    private entityService: EntityService,
    private modalService: ModalService,
    private routeParams: RouteParams,
    private router: Router,
    private toastService: ToastService) { }

  cancel(showToast = true) {
    this.editSpeaker = this.entityService.clone(this.speaker);
    if (showToast) {
      this.toastService.activate(`Cancelled changes to ${this.speaker.name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete ${this.speaker.name}?`;
    this.modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this.speakerService.deleteSpeaker(this.speaker)
          .subscribe(() => {
            this.toastService.activate(`Deleted ${this.speaker.name}`);
            this.gotoSpeakers();
          });
      }
    });
  }

  isAddMode() {
    let id = +this.routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSpeaker();
    this.dbResetSubscription = this.speakerService.onDbReset
      .subscribe(() => this.getSpeaker());
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.speaker ||
      !this.isDirty() ||
      this.modalService.activate();
  }

  save() {
    let speaker = this.speaker = this.entityService.merge(this.speaker, this.editSpeaker);
    if (speaker.id == null) {
      this.speakerService.addSpeaker(speaker)
        .subscribe(s => {
          this.setEditSpeaker(s);
          this.toastService.activate(`Successfully added ${s.name}`);
          this.gotoSpeakers();
        });
      return;
    }
    this.speakerService.updateSpeaker(speaker)
      .subscribe(() => this.toastService.activate(`Successfully saved ${speaker.name}`));
  }

  private getSpeaker() {
    let id = +this.routeParams.get('id');
    if (id === 0) { return; };
    if (this.isAddMode()) {
      this.speaker = <Speaker>{ name: '', twitter: '' };
      this.editSpeaker = this.entityService.clone(this.speaker);
      return;
    }
    this.speakerService.getSpeaker(id)
      .subscribe(speaker => this.setEditSpeaker(speaker));
  }

  private gotoSpeakers() {
    let id = this.speaker ? this.speaker.id : null;
    let route = ['Speakers', { id: id }];
    this.router.navigate(route);
  }

  private isDirty() {
    return this.entityService.propertiesDiffer(this.speaker, this.editSpeaker);
  }

  private setEditSpeaker(speaker: Speaker) {
    if (speaker) {
      this.speaker = speaker;
      this.editSpeaker = this.entityService.clone(this.speaker);
    } else {
      this.gotoSpeakers();
    }
  }
}
