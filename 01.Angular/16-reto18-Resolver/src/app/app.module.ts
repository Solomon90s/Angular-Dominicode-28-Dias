import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactReactiveComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
