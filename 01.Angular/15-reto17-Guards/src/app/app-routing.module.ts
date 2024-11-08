import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { withoutSaveGuard } from './guards/without-save.guard';
import { permissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactReactiveComponent,
    canDeactivate: [withoutSaveGuard],
  },
  {
    //! Ruta que le pasamos un parámetro
    path: 'contact/:id',
    component: ContactReactiveComponent,
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [permissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    //! Ruta vacía
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    //! Cualquier ruta
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
