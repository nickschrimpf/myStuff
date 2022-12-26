import { Timestamp } from "@angular/fire/firestore";

export class Stuff{
  constructor(
    public name:string,
    public quantity:number,
    public dateEntered:Date,
    public perishable:boolean,
    public description:string,
    public expirationDate?:any,
    public id?:string,
    ){
  };
};
