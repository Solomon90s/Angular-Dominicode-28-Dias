import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCitiesComponent } from './home-cities.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCitiesRoutingModule {}
