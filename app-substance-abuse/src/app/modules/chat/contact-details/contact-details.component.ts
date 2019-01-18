import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

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
