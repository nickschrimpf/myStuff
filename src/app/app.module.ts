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
    MaterialsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
