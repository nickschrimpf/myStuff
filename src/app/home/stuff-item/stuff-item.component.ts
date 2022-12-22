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
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.stuffServ.onUpdateStuff({id:this.stuffItem.id,...result})
      };
    });
  };

  onDelete(id:string){
    this.stuffServ.onDeleteStuff(id);
  };
};
