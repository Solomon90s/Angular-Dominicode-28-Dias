import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { withoutSaveGuard } from 'src/app/guards/without-save.guard';
import { DataResolverService } from 'src/app/resolvers/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    //? Guard
    canDeactivate: [withoutSaveGuard],
    //? Resolve
    resolve: { departments: DataResolverService },
  },
];

@NgModule({
  //? Usamos el forChild porque es lazyloading, se carga bajo demanda.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReactiveRoutingModule {}
