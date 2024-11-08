import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionsGuard } from './guards/permissions.guard';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/users/details/details.component';
import { ListComponent } from './components/users/list/list.component';
import { UserComponent } from './components/users/user/user.component';
import { ContactFormDrivenComponent } from './components/contact-form-driven/contact-form-driven.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    //! Esto es lazy-loading
    path: 'contact',
    loadChildren: () =>
      import('./components/contact-reactive/contact-reactive.module').then(
        m => m.ContactReactiveModule
      ),
  },
  {
    //! Esto es lazy-loading
    path: 'cities',
    loadChildren: () =>
      import('./components/home-cities/home-cities.module').then(
        m => m.HomeCitiesModule
      ),
  },
  {
    //! Ruta que le pasamos un parámetro
    path: 'contact/:id',
    component: ContactReactiveComponent,
  },
  {
    //! Esto son rutas hijas, del componente users, sale list y details
    path: 'users',
    component: UserComponent,
    canActivate: [permissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    path: 'contact-form-driven',
    component: ContactFormDrivenComponent,
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
  //? Todas las rutas que no son lazy son eager(se cargan al momento,forRoot)
  //? Usar sólo un forRoot en nuestra app
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
