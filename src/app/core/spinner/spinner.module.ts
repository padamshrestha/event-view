import { BaseException, NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent }   from './spinner.component';
import { SpinnerService }   from './spinner.service';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SpinnerModule {
  constructor(@Optional() @SkipSelf() parentModule: SpinnerModule) {
    if (parentModule) {
      throw new BaseException('SpinnerModule has already been loaded. ');
    }
  }
}
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: SpinnerModule,
//       providers: [SpinnerService]
//     };
//   }
// }

// // If I wanted to use this directly, instead of through SharedModule
// @NgModule({
//   imports: [
//     // SharedModule,
//       SpinnerModule,
//   ],
//   providers: [
//     SpinnerModule.providers
//   ]

// })
// export class AppModule { }
