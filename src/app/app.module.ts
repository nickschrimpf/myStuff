import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuffListComponent } from './home/stuff-list/stuff-list.component';
import { StuffItemComponent } from './home/stuff-item/stuff-item.component';
import { AddEditStuffComponent } from './home/add-edit-stuff/add-edit-stuff.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore,Firestore, initializeFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { connectFirestoreEmulator } from '@firebase/firestore';
import { StuffDatePipe } from './shared/stuff-date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './material.module';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { Auth, provideAuth } from '@angular/fire/auth';
import { connectAuthEmulator, getAuth, initializeAuth } from '@firebase/auth';
import { SignupComponent } from './auth/signup/signup.component';



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
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    AngularFireModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      let firestore:Firestore;
        if(environment.useEmulators){
          firestore = initializeFirestore(getApp(),{})
          connectFirestoreEmulator(firestore,'localhost', 8080);
        }else{
          firestore = getFirestore()
        }
      return firestore
    }),

    provideAuth(()=> {
      let auth:Auth;
      if(environment.useEmulators){
        auth  = initializeAuth(getApp(),{});
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      }else{
        auth = getAuth()
      }
      return auth
    }),
  ],
  providers:[AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
