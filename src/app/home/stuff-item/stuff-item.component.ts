import { Component, Input, OnInit } from '@angular/core';
import { StuffService } from '../stuff.service';
import { Stuff } from '../stuff.model';

@Component({
  selector: 'app-stuff-item',
  templateUrl: './stuff-item.component.html',
  styleUrls: ['./stuff-item.component.css']
})
export class StuffItemComponent implements OnInit {
  @Input()
  stuffItem!: Stuff;

  constructor(private readonly stuffServ:StuffService) { }

  ngOnInit(): void {

  }

  onDelete(id:string){
    this.stuffServ.onDeleteStuff(id);
  }

}
