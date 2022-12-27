import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { stringLength } from '@firebase/util';
import { AddEditStuffComponent } from './add-edit-stuff/add-edit-stuff.component';
import { StuffService } from './stuff.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog:MatDialog,
    private readonly stuffServ:StuffService
  ) { }

  ngOnInit(): void {
  };

  onOpenDialog(){
    const houseIcon = 'house';
    const petsIcon = 'pets';
    const otherIcon = 'no_food';
    const perishableIcon = 'kitchen';
    const bathroomIcon = 'bathroom';
    const dialogRef = this.dialog.open(AddEditStuffComponent,{})
    dialogRef.afterClosed().subscribe(newStuff => {
      console.log(newStuff)
      if(newStuff){
        const stuffName = newStuff.name.split(' ');
        let newName = '';

        for(let word of stuffName){
          if(word !== ''){
            newName += word.charAt(0).toUpperCase() + word.slice(1) + ' '
          }
        }
        const searchAbleTerms  = newStuff.description.split(' ') + stuffName
        console.log(searchAbleTerms)
        // this.stuffServ.onAddNewStuff({dateEntered:new Date(),...newStuff});
      };
    });
  };

};
