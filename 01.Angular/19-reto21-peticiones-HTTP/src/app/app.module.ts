import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/users/details/details.component';
import { ListComponent } from './components/users/list/list.component';
import { UserComponent } from './components/users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
