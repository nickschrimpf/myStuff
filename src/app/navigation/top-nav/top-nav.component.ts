import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
@Output() sidenavToggle = new EventEmitter<void>()
  authSub:Subscription
  isLoggedIn:boolean = false;s
  constructor(private readonly authServ:AuthService) { }

  ngOnInit(): void {
    this.authSub = this.authServ.authChange.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    });
  }
  onToggleSideNav(){
    this.sidenavToggle.emit()
  }

}


