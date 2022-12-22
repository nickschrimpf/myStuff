import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
  stuffForm:FormGroup;


  constructor(
    public dialogRef:MatDialogRef<AddEditStuffComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Stuff,
    private readonly stuffServ:StuffService,

  )
  {};

  ngOnInit(): void {
    if(this.data){
      this.editMode = true;
      this.id = this.data.id
    };
    this.initForm();
  };

  private initForm(){
    let name = '';
    let quantity = 1;
    if(this.editMode){
      name = this.data.name;
      quantity = this.data.quantity;
    };
    this.stuffForm = new FormGroup({
      name:new FormControl(name,Validators.required),
      quantity:new FormControl(quantity,Validators.required)
    });
  };
  onCancel(){
    this.dialogRef.close();
  };
  ngOnDestroy(): void {
  };
};
