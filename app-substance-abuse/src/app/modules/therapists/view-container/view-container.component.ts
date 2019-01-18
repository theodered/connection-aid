import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  sidemenuItems: MenuItem[];

  messages: String[];

  textMsg: string;

  contentCards: Object[];

  constructor() { }

  ngOnInit() {
    this.messages = [];
    this.sidemenuItems = [
      {
        label: 'Therapist1', 
      },
      {
        label: 'Therapist2', 
      },
      {
        label: 'Therapist3', 
      },
      {
        label: 'Therapist4', 
      },
      {
        label: 'Therapist6', 
      },
      {
        label: 'Therapist5', 
      },
      {
        label: 'Therapist7', 
      },
      {
        label: 'Therapist8', 
      }
    ];

  }

  sendText(){
    if(this.textMsg) {
      this.messages.push(this.textMsg);
    }
    this.textMsg = "";
  }

}
