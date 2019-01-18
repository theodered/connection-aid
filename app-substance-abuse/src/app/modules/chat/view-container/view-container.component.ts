import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  mobile_toggle = true;

  contact = {
    'name': 'Karan Dwivedi',
    'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
    'status': 'Online',
    'about': 'Developer'
  }


  constructor() { }

  ngOnInit() {
  }

}
