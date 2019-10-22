import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import { AppComponent } from '../app.component';
import { StylesCompileDependency } from '@angular/compiler';
@Component({
  selector: 'app-registration-form',
  templateUrl: './test.html',
  styles: ['./styles.css']
})
export class RegistrationFormComponent  {

  registrationForm=new FormGroup({
    UserName:new FormControl ('seth'),
    Password: new FormControl('a'),
    ConfirmPassword:new FormControl('b'),
  })
  
}
