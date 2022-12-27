export class Stuff{
  constructor(
    public name:string,
    public quantity:number,
    public dateEntered:Date,
    public category:string,
    public categoryIcon:string,
    public description:string,
    public expirationDate?:any,
    public id?:string,
    ){
  };
};
