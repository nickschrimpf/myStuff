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


  constructor(
    private readonly authServ:AuthService,
    private readonly router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.authServ.registerNewUser({email:form.value.email,password:form.value.password})
    .then(()=>{
      this.router.navigate(['/home']);
    })
    .catch((err)=> {
      console.log(err);
    })
  };

}
