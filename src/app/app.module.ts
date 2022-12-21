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

import { connectFirestoreEmulator } from '@firebase/firestore';
import { StuffDatePipe } from './shared/stuff-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StuffListComponent,
    StuffItemComponent,
    AddEditStuffComponent,
    HomeComponent,
    StuffDatePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
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
    })
  ],

  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
