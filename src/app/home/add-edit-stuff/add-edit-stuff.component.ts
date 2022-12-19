import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-stuff',
  templateUrl: './add-edit-stuff.component.html',
  styleUrls: ['./add-edit-stuff.component.css']
})

export class AddEditStuffComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

stuffForm = this.fb.group({
  stuffName:['',Validators.required],
  stuffQuantity:[null,Validators.required]
})

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.stuffForm)
  }

}
