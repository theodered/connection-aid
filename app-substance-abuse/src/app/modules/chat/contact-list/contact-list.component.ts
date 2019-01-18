import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'name': 'Karan Dwivedi',
      'time': '00:30',
      'last_message': 'Thanks!'
    },
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'name': 'Amogh Gupta',
      'time': '05:00',
      'last_message': 'This is a very very long message to test the wrapping/overflow function'
    },
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'name': 'Palash Kala',
      'time': '00:00',
      'last_message': 'gottit'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
