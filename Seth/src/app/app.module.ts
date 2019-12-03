import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { RulesComponent } from './rules/rules.component';
import { MapComponent } from './map/map.component';
import { MyCountryComponent } from './MyCountry/MyCountry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {TokenInterceptorService}from './token-interceptor.service'
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    RulesComponent,
    MapComponent,
    MyCountryComponent,
    RegisterComponent,
    LoginComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,EventService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

