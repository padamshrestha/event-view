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

import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';

const declarables = [
  FilterTextComponent,
  InitCapsPipe,
  ModalComponent,
  NavComponent
];

const providers = [
  EntityService,
  ExceptionService,
  FilterTextService,
  MessageService,
  ModalService
];

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, SpinnerModule, ToastModule],
  exports: [CommonModule, FormsModule, RouterModule, SpinnerModule, ToastModule, declarables],
  declarations: declarables,
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        providers,
        SpinnerModule.forRoot().providers,
        ToastModule.forRoot().providers
      ]
    }
  }
}
// SharedModule can be imported by anyone, except the root AppModule
// I use the forRoot() for the shared module only. Because I use .providers inside of here.

// SharedRootModule should only be used once, by root AppModule
// const SharedRootModule: ModuleWithProviders = {
//   ngModule: SharedModule,
//   providers: [
//     providers,
//     SpinnerModule.forRoot().providers,
//     ToastModule.forRoot().providers
//   ]
// }
