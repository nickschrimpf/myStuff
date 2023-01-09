import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
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
        this.authChange.next(true)
        this.isLoggedIn = true;
        console.log(profile)
      }else{
        this.isLoggedIn = false;
        this.authChange.next(false);
        this.router.navigate(['welcome'])
      }

    })
  }

  registerNewUser(signUpData:SignUpData){
    return createUserWithEmailAndPassword(this.afAuth,signUpData.email,signUpData.password).then((user)=>{
      console.log(user);
    });
  };
  login(signUpData:SignUpData){
    return signInWithEmailAndPassword(this.afAuth,signUpData.email,signUpData.password)
  };
  logOut(){
    return signOut(this.afAuth);
  };

}
