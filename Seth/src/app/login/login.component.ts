import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router }from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData={}

  constructor(private _auth: AuthService,private _router:Router) {}

  ngOnInit() {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      (res:any)  =>{ 
        console.log(res),
        sessionStorage.setItem('token',res.token),
        this._router.navigate(['/events'])
      },
      err => console.log(err)
      
    )
  }

}
