import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AsyncComponent } from '@shared/components/async/async.component';
import { CachingComponent } from '@shared/components/caching/caching.component';
import { FromEventComponent } from "../../shared/components/from-event/from-event.component";
import { CombineLatestAllComponent } from "../../shared/components/combine-latest-all/combine-latest-all.component";
import { WithLatestFromComponent } from "../../shared/components/with-latest-from/with-latest-from.component";
import { ConcatWithComponent } from "../../shared/components/concat-with/concat-with.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AsyncComponent, CachingComponent, FromEventComponent, CombineLatestAllComponent, WithLatestFromComponent, ConcatWithComponent],
})
export class HomeModule {}
