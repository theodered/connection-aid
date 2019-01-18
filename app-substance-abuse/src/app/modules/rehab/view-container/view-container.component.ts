import { Component, OnInit } from '@angular/core';
import { ParseDataService } from '../../../parse-data.service'

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  rehabs$;
  orderKey: string = 'name';
  constructor( private parseData: ParseDataService ) { }

  ngOnInit() {
    this.parseData.getRehabs().then( (results) => this.rehabs$ = JSON.parse(JSON.stringify(results)));
  }

  handleSort = (key: string) => {
    this.orderKey = key;
  };

}
