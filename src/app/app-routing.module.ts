import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'**',redirectTo:'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
