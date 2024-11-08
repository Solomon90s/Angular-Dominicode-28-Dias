import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColdObservableComponent } from './components/cold-observable/cold-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { HotObservableComponent } from './components/hot-observable/hot-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdObservableComponent,
    HotObservableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
