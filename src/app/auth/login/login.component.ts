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

  constructor(private readonly authServ:AuthService, private readonly router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    this.authServ.login({'email':form.value.email,'password':form.value.password}).then(()=>{
      this.router.navigate(['home']);
    });
  };
}
