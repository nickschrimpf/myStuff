import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();
  constructor(private readonly authServ:AuthService,private readonly router:Router) { }
  authSub:Subscription
  isLoggedIn:boolean = false;
  
  ngOnInit(): void {
    this.authSub = this.authServ.authChange.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    });
  };
  onLogOut(){
    this.authServ.logOut().then(()=>{
    }).catch((err)=>{
      console.log(err)
    });
    this.router.navigate(['welcome']);
    this.sideNavToggle.emit();
  };
  onLogin(){
    this.router.navigate(['login']);
    this.sideNavToggle.emit();
  };
  onSignUp(){
    this.router.navigate(['signup']);
    this.sideNavToggle.emit();
  };
};
