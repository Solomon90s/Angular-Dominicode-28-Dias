import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
