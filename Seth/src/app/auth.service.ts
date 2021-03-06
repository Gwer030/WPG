 import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import { from } from 'rxjs';
@Injectable()
export class AuthService {
private _registerUrl = "http://localhost:3000/api/register"
private _loginUrl ="http://localhost:3000/api/login"
  constructor(private http: HttpClient) { }
  registerUser(user) {
   return  this.http.post(this._registerUrl, user)
  }
  loginUser(user)
  {
    return this.http.post(this._loginUrl,user)
   
    }
    getToken(){
      return sessionStorage.getItem('token')
    
     }
     loggedIn() {
      return !!sessionStorage.getItem('token')
      }
  }
  

