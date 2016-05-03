import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CanDeactivate, OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import {
  EntityService,
  ModalService,
  Speaker,
  SpeakerService,
  ToastService
} from '../../../app/shared';

@Component({
  moduleId: module.id,
  selector: 'ev-speaker',
  templateUrl: 'speaker.component.html',
  styles: ['.mdl-textfield__label {top: 0;}']
})
export class SpeakerComponent implements CanDeactivate, OnActivate, OnDestroy, OnInit {
  @Input() speaker: Speaker;
  editSpeaker: Speaker = <Speaker>{};

  private dbResetSubscription: Subscription;
  private id: any;

  constructor(
    private speakerService: SpeakerService,
    private entityService: EntityService,
    private modalService: ModalService,
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
    return isNaN(this.id);
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

  routerOnActivate(
    current: RouteSegment,
    prev?: RouteSegment,
    currTree?: RouteTree,
    prevTree?: RouteTree
  ) {
    let id = +current.getParam('id');
    this.id = id;
  }

  routerCanDeactivate(currTree?: RouteTree, futureTree?: RouteTree) {
    let deactivate = !this.speaker ||
      !this.isDirty() ||
      this.modalService.activate();
    return <Promise<boolean>>deactivate;
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
    if (this.id === 0) { return; };
    if (this.isAddMode()) {
      this.speaker = <Speaker>{ name: '', twitter: '' };
      this.editSpeaker = this.entityService.clone(this.speaker);
      return;
    }
    this.speakerService.getSpeaker(this.id)
      .subscribe(speaker => this.setEditSpeaker(speaker));
  }

  private gotoSpeakers() {
    let id = this.speaker ? this.speaker.id : null;
    let route = ['/speakers', id];
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
