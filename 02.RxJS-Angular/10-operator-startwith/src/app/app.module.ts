import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartwithOperatorComponent } from './components/startwith-operator/startwith-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    StartwithOperatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
