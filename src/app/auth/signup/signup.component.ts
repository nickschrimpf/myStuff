import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage = '';

  constructor(
    private readonly authServ:AuthService,
    private readonly router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    // I THINK I WILL END UP USING REACTIVE FORMS TO VALIDATE PASSWORDS IN THE FUTURE
    if(form.value.password === form.value.passwordConfirm){
      this.authServ.registerNewUser({email:form.value.email,password:form.value.password})
        .then(()=>{
          this.router.navigate(['/home']);
        })
        .catch((err)=> {
          this.errorMessage = err.message;
        });
    }else{
      this.errorMessage = "Your passwords did not match"
    };
  };
  onLogin(){
    this.router.navigate(['login']);
  };
};
