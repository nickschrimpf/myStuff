import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { canActivate,redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent,...canActivate(redirectLoggedInToHome)},
  {path:'signup',component:SignupComponent,...canActivate(redirectLoggedInToHome)},
  {path:'login',component:LoginComponent,...canActivate(redirectLoggedInToHome)},
  {path:'home',component:HomeComponent,...canActivate(redirectUnauthorizedToLogin)},
  {path:'**',redirectTo:'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
