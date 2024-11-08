import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCitiesRoutingModule } from './home-cities-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ButtonComponent } from '../button/button.component';
import { CitiesComponent } from '../cities/cities.component';
import { FormNewItemComponent } from '../form-new-item/form-new-item.component';
import { HomeCitiesComponent } from './home-cities.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    HomeCitiesComponent,
    CitiesComponent,
    ButtonComponent,
    FormNewItemComponent,
    CardComponent,
    FilterPipe,
  ],
  imports: [CommonModule, HomeCitiesRoutingModule, FormsModule],
})
export class HomeCitiesModule {}
