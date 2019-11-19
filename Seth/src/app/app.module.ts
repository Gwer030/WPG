import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { RulesComponent } from './rules/rules.component';
import { MapComponent } from './map/map.component';
import { ResourcesComponent } from './resources/resources.component';
import { MyCountryComponent } from './MyCountry/MyCountry.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    RulesComponent,
    MapComponent,
    RegistrationFormComponent,
    MyCountryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

