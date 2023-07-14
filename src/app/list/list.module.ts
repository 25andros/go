import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UnitsComponent } from './units/units.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ErrorComponent } from './error/error.component';

import { MaterialModule } from '../material/material.module';
import { ItemsComponent } from './units/items/items.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturesComponent } from './features/features.component';
import { BikeComponent } from './bike/bike.component';
import { Pg2Component } from './bike/pg2/pg2.component';
import { Pg1Component } from './bike/pg1/pg1.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogCardComponent } from './dogs/dog-card/dog-card.component';
import { WtaComponent } from './wta/wta.component';


@NgModule({
  declarations: [
    UnitsComponent,
    QuotesComponent,
    ErrorComponent,
    ItemsComponent,
    AboutComponent,
    ProjectsComponent,
    FeaturesComponent,
    BikeComponent,
    Pg2Component,
    Pg1Component,
    DogsComponent,
    DogCardComponent,
    WtaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UnitsComponent,
    QuotesComponent,
    ErrorComponent,
  ]
})
export class ListModule {

}
