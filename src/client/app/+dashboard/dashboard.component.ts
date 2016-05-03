import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { DashboardButtonComponent } from './dashboard-button';
import { Speaker, SpeakerService, ToastService } from '../../app/shared';

@Component({
  moduleId: __moduleName,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [DashboardButtonComponent]
})
export class DashboardComponent implements OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  speakers: Observable<Speaker[]>;

  constructor(
    private speakerService: SpeakerService,
    private router: Router,
    private toastService: ToastService) { }

  getSpeakers() {
    this.speakers = this.speakerService.getSpeakers()
      .catch(e => {
        this.toastService.activate(`${e}`);
        return Observable.of([]);
      });
  }

  gotoDetail(speaker: Speaker) {
    let link = ['/speakers', 'speaker', speaker.id];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getSpeakers();
    this.dbResetSubscription = this.speakerService.onDbReset
      .subscribe(() => this.getSpeakers());
  }

  trackBySpeakers(index: number, speaker: Speaker) {
    return speaker.id;
  }
}
