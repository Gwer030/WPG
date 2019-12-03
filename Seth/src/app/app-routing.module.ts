import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RulesComponent } from './rules/rules.component';
import { MapComponent } from './map/map.component';
import { MyCountryComponent } from './MyCountry/MyCountry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SpecialEventsComponent}from './special-events/special-events.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'events', component:EventsComponent,canActivate:[AuthGuard]},
  {path: 'rules', component:RulesComponent},
  {path: 'map',component:MapComponent},
  {path: 'MyCountry',component:MyCountryComponent},
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'special-events',component:SpecialEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

