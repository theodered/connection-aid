import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  user_id = 'def';

  messages = [
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'sender_id': 'abc'
      'sender': 'Karan Dwivedi',
      'text': 'Hi how are you?',
      'time': '00:15'
    },
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'sender_id': 'def'
      'sender': 'Palash Kala',
      'text': 'I am good',
      'time': '00:17'
    },
    {
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      'sender_id': 'abc'
      'sender': 'Karan Dwivedi',
      'text': 'Thanks!',
      'time': '00:30'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}