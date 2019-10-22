import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RulesComponent } from './rules/rules.component';
import { MapComponent } from './map/map.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';


const routes: Routes = [
  {path: 'events', component:EventsComponent },
  {path: 'rules', component:RulesComponent},
  {path: 'map',component:MapComponent},
  {path: 'registration',component:RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

