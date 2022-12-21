import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-add-edit-stuff',
  templateUrl: './add-edit-stuff.component.html',
  styleUrls: ['./add-edit-stuff.component.css']
})

export class AddEditStuffComponent implements OnInit, OnDestroy {
  today = new Date();
  id:string|null = null;
  editMode: boolean = false;
  stuffSub:Subscription|undefined;
  routeSub:Subscription|undefined;
  stuffForm:FormGroup;


  constructor(
    private stuffServ:StuffService,
    private router:Router,
    private route:ActivatedRoute)
  {};

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });

  };

  private initForm(){
    let name = '';
    let quantity = 1;
    if(this.editMode){
      this.stuffSub = this.stuffServ.onGetStuffById(this.id)
       .subscribe(stuff => {
        name = stuff['name'];
        quantity = stuff['quantity'];
        this.stuffForm.patchValue({name,quantity});
      });
    };
    this.stuffForm = new FormGroup({
      name:new FormControl(name,Validators.required),
      quantity:new FormControl(quantity,Validators.required)
    });
  };
  onSubmit(){
    if(this.editMode){
      this.stuffServ.onUpdateStuff(
        {id:this.id,...this.stuffForm.value,dateEntered:this.today}
      );
    }else{
      const name = this.stuffForm.value.name;
      const quantity = this.stuffForm.value.quantity;
      this.stuffServ.onAddNewStuff(
        {name:name,quantity:quantity,dateEntered:this.today}
      );
    };
    this.stuffForm.reset();
    this.router.navigate(['home']);
  };
  onCancel(){
    this.stuffForm.reset();
    this.router.navigate(['home'])
  };
  ngOnDestroy(): void {
    this.stuffSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  };
};
