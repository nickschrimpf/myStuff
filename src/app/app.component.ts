import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { slideInAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent implements OnInit{
  title = 'myStuff';

  constructor(
    private readonly authServ:AuthService,
    private context:ChildrenOutletContexts
  ){}

  ngOnInit(){
    this.authServ.initAuthListener();
  };
  getRouteAnimationData(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
}
