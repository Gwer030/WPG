import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl,FormBuilder} from '@angular/forms';
import {userNameValidator} from './Func/userNameValidation'
import {passwordValidator} from './Func/passwordValidation'

@Component({
  selector: 'app-registration-form',
  templateUrl: './test.html',
  styles: ['./styles.css']
})
export class RegistrationFormComponent  {
  constructor(private fb: FormBuilder){}
  registrationForm=this.fb.group({
    UserName:  ['',[Validators.required,Validators.minLength(3),userNameValidator(/admin/)]],
    Password: [''],
    ConfirmPassword:[''],
  },{validator: passwordValidator});
  
}
