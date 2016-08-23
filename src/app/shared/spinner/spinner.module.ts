import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent }   from './spinner.component';
import { SpinnerService }   from './spinner.service';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
})
export class SpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpinnerModule,
      providers: [SpinnerService]
    };
  }
}

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
