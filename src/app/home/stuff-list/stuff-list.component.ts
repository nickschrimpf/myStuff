import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {
  stuffList:any;
  constructor(private readonly stuffServ:StuffService) { }

  ngOnInit(): void {
    this.stuffList = this.stuffServ.onGetStuff()
  }

}
