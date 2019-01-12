import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  naviationConfig = [
    { name: 'Home'},
    { name: 'Education'},
    { name: 'Stories'},
    { name: 'Therapist'},
    { name: 'Team'},
    { name: 'About Us'},
    { name: 'Rehab Center'},
    { name: 'Contact Us'}
     
  ];
  constructor() {
   }

  ngOnInit() {
  }

}
