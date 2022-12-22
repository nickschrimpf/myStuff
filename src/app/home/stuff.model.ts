export class Stuff{
  constructor(
    public name:string,
    public quantity:number,
    public dateEntered:Date,
    public parishable:boolean,
    public description:string,
    public expirationDate?:Date,
    public id?:string,
    ){
  };
};
