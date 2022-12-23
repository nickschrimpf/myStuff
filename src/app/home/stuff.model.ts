import { Timestamp } from "@angular/fire/firestore";

export class Stuff{
  constructor(
    public name:string,
    public quantity:number,
    public dateEntered:Date,
    public parishable:boolean,
    public description:string,
    public expirationDate?:any,
    public id?:string,
    ){
  };
};
