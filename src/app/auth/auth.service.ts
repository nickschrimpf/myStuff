import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { SignUpData } from '../shared/signup-data.interface';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(private afAuth:Auth) { }

  registerNewUser(signupData:SignUpData){
    return createUserWithEmailAndPassword(this.afAuth,signupData.email,signupData.password).then((user)=>{
      console.log(user)
    })
  }

}
