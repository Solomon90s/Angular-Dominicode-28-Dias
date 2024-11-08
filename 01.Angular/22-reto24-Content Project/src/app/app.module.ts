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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    //? Para hacer uso de interceptors
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
