import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleOperatorComponent } from './components/single-operator/single-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleOperatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
