import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Stuff } from '../stuff.model';

@Component({
  selector: 'app-add-edit-stuff',
  templateUrl: './add-edit-stuff.component.html',
  styleUrls: ['./add-edit-stuff.component.css']
})

export class AddEditStuffComponent implements OnInit, OnDestroy {
  id:string|null = null;
  editMode: boolean = false;
  stuffForm:FormGroup;
  minDate:any;


  constructor(
    public dialogRef:MatDialogRef<AddEditStuffComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Stuff,
  )
  {};

  ngOnInit(): void {
    if(this.data){
      this.editMode = true;

      this.id = this.data.id
    };
    this.initForm();
    this.minDate = new Date();
  };

  private initForm(){
    let name = '';
    let quantity = 1;
    let parishable = false;
    let description = '';
    let expirationDate = undefined;

    if(this.editMode){
      name = this.data.name;
      quantity = this.data.quantity;
      description = this.data.description;
      parishable = this.data.parishable;
      if(parishable){
        expirationDate = new Date(this.data.expirationDate.seconds * 1000)
      }

    };
    this.stuffForm = new FormGroup({
      name:new FormControl(name,Validators.required),
      quantity:new FormControl(quantity,Validators.required),
      description:new FormControl(description),
      parishable:new FormControl(parishable),
      expirationDate:new FormControl(expirationDate)
    });
  };
  onCancel(){
    this.dialogRef.close();
  };
  ngOnDestroy(): void {
  };
};
