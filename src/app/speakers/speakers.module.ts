import { NgModule } from '@angular/core';

import { SpeakerButtonComponent } from './shared/speaker-button/speaker-button.component';
import { SortSpeakersPipe } from './shared/sort-speakers.pipe';
import { routing, routedComponents } from './speakers.routing';
import { SharedModule } from '../shared/shared.module';

const declarables = [SpeakerButtonComponent, SortSpeakersPipe, routedComponents]

const providers = [];

@NgModule({
  imports: [routing, SharedModule],
  declarations: [declarables],
  providers: [providers]
})
export class SpeakersModule { }
