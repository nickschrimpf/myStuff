import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Stuff } from '../stuff.model';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-add-edit-stuff',
  templateUrl: './add-edit-stuff.component.html',
  styleUrls: ['./add-edit-stuff.component.css']
})

export class AddEditStuffComponent implements OnInit {
  today = new Date()
  constructor(
    private fb:FormBuilder,
    private stuffServ:StuffService,
    private router:Router,
    private route:ActivatedRoute) { }

  stuffForm = this.fb.group({
    name:['',Validators.required],
    quantity:['',Validators.required]
  })

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params)
      }
    )
  }

  onSubmit(){
    const name = this.stuffForm.value.name;
    const quantity = this.stuffForm.value.quantity;
    this.stuffServ.onAddNewStuff({name:name,quantity:quantity,dateEntered:this.today});
    this.stuffForm.reset()
    this.router.navigate(['home'])
  }
}
