import { Component, Input, OnInit } from '@angular/core';
import { StuffService } from '../stuff.service';
import { Stuff } from '../stuff.model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStuffComponent } from '../add-edit-stuff/add-edit-stuff.component';

@Component({
  selector: 'app-stuff-item',
  templateUrl: './stuff-item.component.html',
  styleUrls: ['./stuff-item.component.css']
})
export class StuffItemComponent implements OnInit {
  @Input()
  stuffItem!: Stuff;

  constructor(
    private readonly stuffServ:StuffService,
    public dialog:MatDialog
  ){};

  ngOnInit(): void {
  };

  onOpenDialog():void{
    const dialogRef = this.dialog.open(AddEditStuffComponent,{data:this.stuffItem});
    dialogRef.afterClosed().subscribe(editedStuff => {

        // this.stuffServ.onUpdateStuff({id:this.stuffItem.id,...result})
        if(editedStuff){
          const stuffName = editedStuff.name.split(' ');
          let newName = '';
          for(let word of stuffName){
            if(word !== ''){
              newName += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
            };
          };
          const searchTerms  = editedStuff.description.split(' ').concat(stuffName);
          let stuffCategoryIconName = '';
          if(editedStuff.category === 'House Hold Stuff'){
            stuffCategoryIconName = 'house';
          }else if(editedStuff.category === 'Pet Stuff'){
            stuffCategoryIconName = 'pets';
          }else if(editedStuff.category === 'Other Stuff'){
            stuffCategoryIconName = 'no_food';
          }else if(editedStuff.category === 'Bathroom Stuff'){
            stuffCategoryIconName = 'bathroom'
          }else if(editedStuff.category === 'Perishable Stuff'){
            stuffCategoryIconName = 'kitchen';
          };
          console.log(this.stuffItem)
          console.log(editedStuff)
          this.stuffServ.onUpdateStuff({
            id:this.stuffItem.id,
            dateEntered:this.stuffItem.dateEntered,
            name:newName,
            quantity:editedStuff.quantity,
            description:editedStuff.description,
            category:editedStuff.category,
            categoryIcon:stuffCategoryIconName,
            expirationDate:editedStuff.expirationDate,
            searchTerms:searchTerms
          });
        };
    });
  };

  onDelete(id:string){
    this.stuffServ.onDeleteStuff(id);
  };
};
