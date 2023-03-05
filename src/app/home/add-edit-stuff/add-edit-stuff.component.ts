import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Stuff } from '../stuff.model';
import { nameValidator } from './name-validator';
import { categoryValidator } from './category-validator';
import { finalize, map } from 'rxjs/operators';

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
    private afsStorage:AngularFireStorage,
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
    let category = '';
    let description = '';
    let expirationDate = undefined;
    let photoURL = undefined
    let price = 1.00;
    let placeOfPurchase = '';

    if(this.editMode){
      name = this.data.name;
      quantity = this.data.quantity;
      description = this.data.description;
      category = this.data.category;
      if(category === 'Perishable Stuff'){
        expirationDate = new Date(this.data.expirationDate.seconds * 1000)
      }

    };
    this.stuffForm = new FormGroup({
      name:new FormControl(name,[Validators.required,nameValidator()]),
      quantity:new FormControl(quantity,Validators.required),
      description:new FormControl(description),
      price:new FormControl(price),
      placeOfPurchase:new FormControl(placeOfPurchase),
      photoURL : new FormControl(photoURL),
      category:new FormControl(category,Validators.required),
      expirationDate:new FormControl(expirationDate)
    },{validators:categoryValidator()});
  };
  onPhotoAdded(event){
    console.log(event)
    if(event.target.files[0]){
      const file = event.target.files[0]
      const filePath = 'stuff'+event.target.files[0].name
      this.afsStorage.ref(filePath)
      const UploadTask = this.afsStorage.upload(filePath,file)
      UploadTask.snapshotChanges().pipe(
        finalize(() => {

        }))

    }
  }
  onCancel(){
    this.dialogRef.close();
  };
  ngOnDestroy(): void {
  };
};

