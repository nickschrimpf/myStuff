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
    let stuffCategoryIconName = ''
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

        const searchTerms  = newStuff.description.split(' ').concat(stuffName);

        if(newStuff.category === 'House Hold Stuff'){
          stuffCategoryIconName = 'house';
        }else if(newStuff.category === 'Pet Stuff'){
          stuffCategoryIconName = 'pets';
        }else if(newStuff.category === 'Other Stuff'){
          stuffCategoryIconName = 'no_food';
        }else if(newStuff.category === 'Bathroom Stuff'){
          stuffCategoryIconName = 'bathroom'
        }else if(newStuff.category === 'Perishable Stuff'){
          stuffCategoryIconName = 'kitchen';
        }


        console.log(newStuff.expirationDate)

        this.stuffServ.onAddNewStuff({
          dateEntered:new Date(),
          name:newName,
          quantity:newStuff.quantity,
          description:newStuff.description,
          category:newStuff.category,
          categoryIcon:stuffCategoryIconName,
          expirationDate:newStuff.expirationDate,
          searchTerms:searchTerms
        });
      };
    });
  };

};
