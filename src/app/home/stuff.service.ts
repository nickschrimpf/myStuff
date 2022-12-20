import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collectionData, collection } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Stuff } from './stuff.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  stuff$;
  stuffCollection;
  constructor(private fireStore:Firestore) {
    this.stuffCollection = collection(this.fireStore,'stuff');
    this.stuff$ = collectionData(this.stuffCollection,{idField:'id'});
  };

  onGetStuff(){
    return this.stuff$
  };

  onAddNewStuff(stuff:any){
    return addDoc(this.stuffCollection,stuff)
    // stuff = new Stuff(stuff.name,stuff.quantity,stuff.dateEntered);
    // this.stuff.push(stuff)
    // console.log(this.fireStore)
  }
}
