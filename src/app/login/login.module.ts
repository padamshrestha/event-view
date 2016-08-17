import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routing, routedComponents } from './login.routing';
import { LoginService } from './login.service';
import { SharedModule } from '../shared/shared.module';

const providers = [LoginService];

const declarables = [routedComponents];

@NgModule({
  imports: [SharedModule, routing],
  declarations: [declarables],
})
export class LoginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [providers]
    };
  }
}
