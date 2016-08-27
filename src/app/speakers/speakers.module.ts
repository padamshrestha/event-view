import { NgModule } from '@angular/core';

import { SpeakerButtonComponent } from './shared/speaker-button/speaker-button.component';
import { SortSpeakersPipe } from './shared/sort-speakers.pipe';
import { routing, routedComponents } from './speakers.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [routing, SharedModule],
  declarations: [SpeakerButtonComponent, SortSpeakersPipe, routedComponents]
})
export class SpeakersModule { }
