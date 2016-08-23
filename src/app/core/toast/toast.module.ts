import { BaseException, NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
  imports: [CommonModule],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService]
})
export class ToastModule {
  constructor(@Optional() @SkipSelf() parentModule: ToastModule) {
    if (parentModule) {
      throw new BaseException('ToastModule has already been loaded. ');
    }
  }
}
//   // static forRoot(): ModuleWithProviders {
//   //   return {
//   //     ngModule: ToastModule,
//   //     providers: [ToastService]
//   //   }
//   // }
// }
