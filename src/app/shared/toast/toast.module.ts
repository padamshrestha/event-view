import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

const declarables = [ToastComponent]
const providers = [ToastService];

@NgModule({
  imports: [CommonModule],
  exports: [ToastComponent],
  declarations: [declarables],
})
export class ToastModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: providers
    }
  }
}
