import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Speaker, SpeakerService } from '../../app/models';
import { ToastService } from '../../app/core';

@Component({
  moduleId: module.id,
  selector: 'ev-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
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
      .do(() => this.toastService.activate('Got speakers for the dashboard'))
      .catch(e => {
        this.toastService.activate(`${e}`);
        return Observable.of([]);
      });
  }

  gotoDetail(speaker: Speaker) {
    let link = ['/speakers', speaker.id];
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
