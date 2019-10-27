import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './test.html',
  styles: ['./styles.css']
})
export class RegistrationFormComponent  {
  constructor(private fb: FormBuilder){}
  registrationForm=this.fb.group({
    UserName:  ['',[Validators.required,Validators.minLength(3)]],
    Password: [''],
    ConfirmPassword:[''],
  });
  
}
