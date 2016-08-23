import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextModule } from './filter-text/filter-text.module'

import { InitCapsPipe } from './init-caps.pipe';

const declarables = [
  InitCapsPipe,
];

// imports: imports the module's exports. which is usually declarables and providers
// in our case the filter-text has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [CommonModule, FilterTextModule, FormsModule],
  exports: [CommonModule, FilterTextModule, FormsModule, declarables],
  declarations: declarables,
})
export class SharedModule {
  // static forRoot() {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //       FilterTextModule.forRoot().providers
  //     ]
  //   }
  // }
}
// SharedModule can be imported by anyone, except the root AppModule
// I use the forRoot() for the shared module only. Because I use .providers inside of here.

// SharedRootModule should only be used once, by root AppModule
// const SharedRootModule: ModuleWithProviders = {
//   ngModule: SharedModule,
//   providers: [
//     providers,
//     FilterTextModule.forRoot().providers
//   ]
// }
