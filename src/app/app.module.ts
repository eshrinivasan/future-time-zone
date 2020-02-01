import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DisplayComponent } from './display/display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//must to use formcontrol

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AngularDateTimePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
