import { Injectable } from '@angular/core';
import { deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { collectionData, collection } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';


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
    return this.stuff$;
  };
  onGetStuffById(id:any){
    const stuffDocReference = doc(this.fireStore,`stuff/${id}`);
    return docData(stuffDocReference,{idField:'id'});
  };
  onAddNewStuff(stuffItem:any){
    return addDoc(this.stuffCollection,stuffItem);
  };
  onDeleteStuff(id:string){
    const stuffDocReference = doc(this.fireStore,`stuff/${id}`);
    return deleteDoc(stuffDocReference);
  };
  onUpdateStuff(stuffItem:any){
    const stuffDocReference = doc(this.fireStore,`stuff/${stuffItem.id}`);
    return updateDoc(stuffDocReference,stuffItem);
  };
};
