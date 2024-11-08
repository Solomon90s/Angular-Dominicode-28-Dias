import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DelayOperatorComponent } from './components/delay-operator/delay-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    DelayOperatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
