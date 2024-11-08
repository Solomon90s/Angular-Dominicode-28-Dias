import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimestampOperatorComponent } from './components/timestamp-operator/timestamp-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TimestampOperatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
