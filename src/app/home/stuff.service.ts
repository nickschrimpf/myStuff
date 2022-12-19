import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  stuff = [
    {
      name:'magnizium',
      quantity:'2',
      dateEntered:new Date('9/22/22')
    },
    {
      name:'tortillas',
      quantity:'2',
      dateEntered:new Date('10/22/22')
    },
    {
      name:'chedder cheese',
      quantity:'2',
      dateEntered:new Date('11/22/22')
    }
  ]
  constructor() { }

  onGetStuff(){
    return this.stuff
  }
}
