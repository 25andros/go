import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './list/quotes/quotes.component';
import { ErrorComponent } from './list/error/error.component';
import { UnitsComponent } from './list/units/units.component';
import { AboutComponent } from './list/about/about.component';
import { ProjectsComponent } from './list/projects/projects.component';
import { FeaturesComponent } from './list/features/features.component';
import { BikeComponent } from './list/bike/bike.component';


const routes: Routes = [

 // Default route
  { path: '', redirectTo: '/projects', pathMatch: 'full' }, 

  { path: 'about', component: AboutComponent },
  { path: '404', component: ErrorComponent },

  { path: 'home', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'doggies', component: UnitsComponent },
  { path: 'bicycle', component: BikeComponent },



  // The following line is the default route, always keep it at the bottom
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes),
  
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
