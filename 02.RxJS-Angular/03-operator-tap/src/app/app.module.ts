import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TapOperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
