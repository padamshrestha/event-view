import { BaseException, NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { MessageService } from './message.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { NavComponent } from './nav/nav.component';

import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';

const declarables = [
  ModalComponent,
  NavComponent
];

const providers = [
  EntityService,
  ExceptionService,
  MessageService,
  ModalService
];

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, SpinnerModule, ToastModule],
  exports: [CommonModule, FormsModule, RouterModule, SpinnerModule, ToastModule, declarables],
  declarations: declarables,
  providers: providers
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new BaseException('CoreModule has already been loaded. ');
    }
  }
}
//   static forRoot() {
//     return {
//       ngModule: CoreModule,
//       providers: [
//         providers,
//         SpinnerModule, //.forRoot().providers,
//         ToastModule,   //.forRoot().providers
//       ]
//     }
//   }
// }
// CoreModule can be imported by anyone, except the root AppModule
// I use the forRoot() for the shared module only. Because I use .providers inside of here.

// SharedRootModule should only be used once, by root AppModule
// const SharedRootModule: ModuleWithProviders = {
//   ngModule: CoreModule,
//   providers: [
//     providers,
//     SpinnerModule.forRoot().providers,
//     ToastModule.forRoot().providers
//   ]
// }
