import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStuffComponent } from './add-edit-stuff/add-edit-stuff.component';
import { StuffService } from './stuff.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today = new Date()
  constructor(
    public dialog:MatDialog,
    private readonly stuffServ:StuffService
  ) { }

  ngOnInit(): void {
  };

  onOpenDialog(){
    const dialogRef = this.dialog.open(AddEditStuffComponent,{})
    dialogRef.afterClosed().subscribe(newStuff => {
      if(newStuff){
        this.stuffServ.onAddNewStuff({dateEntered:this.today,...newStuff});
      };
    });
  };

};
