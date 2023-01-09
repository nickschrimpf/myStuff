import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SignUpData } from '../shared/signup-data.interface';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  authChange = new Subject<boolean>();
  isLoggedIn = false

  constructor(private afAuth:Auth,private readonly router:Router) { }

  initAuthListener(){
    authState(this.afAuth).subscribe(profile => {
      if(profile){
        this.authChange.next(true);
        this.isLoggedIn = true;
        this.router.navigate(['home']);
      }else{
        this.isLoggedIn = false;
        this.authChange.next(false);
        this.router.navigate(['welcome']);
      };
    });
  };

  registerNewUser(signUpData:SignUpData){
    return createUserWithEmailAndPassword(this.afAuth,signUpData.email,signUpData.password).then((user)=>{
      // THIS MIGHT BE USED LATER IF WE FEEL WE NEED TO VARIFY USERS EMAILS
      // sendEmailVerification(this.afAuth.currentUser);
    });
  };
  login(signUpData:SignUpData){
    return signInWithEmailAndPassword(this.afAuth,signUpData.email,signUpData.password);
  };
  logOut(){
    this.authChange.next(false);
    return signOut(this.afAuth);
  };
  onPasswordResetRequest(email){
    return sendPasswordResetEmail(this.afAuth,email);
  };
};
