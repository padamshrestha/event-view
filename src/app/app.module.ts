import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';

import './shared/rxjs-extensions';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import { routing } from './routing/app.routing';
import { SpeakerService } from './models';

/* Feature Modules */
import { LoginModule } from './login/login.module';
import { SharedRootModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 }),
    LoginModule,
    routing,
    SharedRootModule // Gets the module and the providers
  ],
  declarations: [AppComponent],
  providers: [SpeakerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
