import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(private readonly authServ:AuthService, private readonly router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.authServ.login({'email':form.value.email,'password':form.value.password}).then(()=>{
      this.router.navigate(['home']);
    }).catch((err)=>{
      console.log(err)
      this.errorMessage = err.message
    });
  };
  onSignUp(){
    this.router.navigate(['signup']);
  };
  onPasswordReset(email){
    this.authServ.onPasswordResetRequest(email).then(()=>{
      this.errorMessage = "An email was sent if you have an existing account with that email"
    }).catch((err)=> {
      console.log(err.message)
    })
  }
}
