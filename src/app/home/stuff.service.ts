import { Injectable } from '@angular/core';
import { Stuff } from './stuff.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  stuff:Stuff[] = [
    {
      id:'1',
      name:'magnizium',
      quantity:2,
      dateEntered:new Date('9/22/22')
    },
    {
      id:'2',
      name:'tortillas',
      quantity:2,
      dateEntered:new Date('10/22/22')
    },
    {
      id:'3',
      name:'chedder cheese',
      quantity:4,
      dateEntered:new Date('11/22/22')
    }
  ]
  constructor() { }

  onGetStuff(){
    return this.stuff
  }
  onAddNewStuff(stuff:any):void{
    stuff = new Stuff(stuff.name,stuff.quantity,stuff.dateEntered);
    this.stuff.push(stuff)

  }
}
