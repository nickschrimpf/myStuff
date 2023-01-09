import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuffListComponent } from './home/stuff-list/stuff-list.component';
import { StuffItemComponent } from './home/stuff-item/stuff-item.component';
import { AddEditStuffComponent } from './home/add-edit-stuff/add-edit-stuff.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { StuffDatePipe } from './shared/stuff-date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './material.module';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { provideAuth } from '@angular/fire/auth';
import { getAuth} from '@firebase/auth';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    StuffListComponent,
    StuffItemComponent,
    AddEditStuffComponent,
    HomeComponent,
    StuffDatePipe,
    SideNavComponent,
    TopNavComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(()=> getAuth())
  ],
  providers:[AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
