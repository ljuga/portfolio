import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {ProgressBarAngularModule} from "progress-bar-angular"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProgressBarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
