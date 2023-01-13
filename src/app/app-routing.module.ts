import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard ,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['welcome']);

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent,
    data:{animation:'WelcomePage'}
  },
  {
    path:'signup',
    component:SignupComponent,
    data:{animation:'SignUpPage'}
  },
  {
    path:'login',
    component:LoginComponent,
    data:{animation:'LoginPage'}
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    data:{
      animation:'HomePage',
      authGuardPipe:redirectUnauthorizedToLogin
    }
  },
  {
    path:'**',
    redirectTo:'welcome',
    pathMatch:'full',

  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
