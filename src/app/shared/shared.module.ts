import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { FilterTextComponent } from './filter-text/filter-text.component'
import { FilterTextService } from './filter-text/filter-text.service';
import { InitCapsPipe } from './init-caps.pipe';
import { MessageService } from './message.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

import { ToastModule } from './toast/toast.module';

const declarables = [
  FilterTextComponent,
  InitCapsPipe,
  ModalComponent,
  NavComponent,
  SpinnerComponent
];

const providers = [
  EntityService,
  ExceptionService,
  FilterTextService,
  MessageService,
  ModalService,
  SpinnerService
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ToastModule.forRoot()],
  exports: [CommonModule, FormsModule, declarables, ToastModule],
  declarations: declarables
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [providers]
    };
  }
}
