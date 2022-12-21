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

import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
import { connectFirestoreEmulator } from '@firebase/firestore';

@NgModule({
  declarations: [
    AppComponent,
    StuffListComponent,
    StuffItemComponent,
    AddEditStuffComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],

  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
