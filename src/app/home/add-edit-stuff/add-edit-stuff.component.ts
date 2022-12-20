import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stuff } from '../stuff.model';
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


  constructor(
    private fb:FormBuilder,
    private stuffServ:StuffService,
    private router:Router,
    private route:ActivatedRoute)
  {};

  stuffForm = this.fb.group({
    name:['',Validators.required],
    quantity:[1,Validators.required]
  });


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode)
      });
      this.initForm()
  };
  ngOnDestroy(): void {
    this.stuffSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
  private initForm(){
    let name = '';
    let quantity = 1;
    let dateEntered = this.today;
    if(this.editMode){
      const stuff = this.stuffServ.onGetStuffById(this.id)
      this.stuffSub = stuff.subscribe(stuff => {
        name = stuff['name'];
        quantity = stuff['quantity'];
        this.stuffForm.patchValue({name,quantity})
      })

    }

  }

  onSubmit(){
    const name = this.stuffForm.value.name;
    const quantity = this.stuffForm.value.quantity;
    this.stuffServ.onAddNewStuff({name:name,quantity:quantity,dateEntered:this.today});
    this.stuffForm.reset()
    this.router.navigate(['home'])
  }
}
