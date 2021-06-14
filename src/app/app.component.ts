import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardDetails = [
    {
      "title": "Coaching",
      "Description": "The Digital Playbook is similar, but its more than just a reference document. Unlike its paper counterpart, its a dynamic, intelligent system t"
    },
    {
      "title": "Defence",
      "Description": "The Digital Playbook is similar, but its more than just a reference document. Unlike its paper counterpart, its a dynamic, intelligent system t"
    },
    {
      "title": "Offence",
      "Description": "The Digital Playbook is similar, but its more than just a reference document. Unlike its paper counterpart, its a dynamic, intelligent system t"
    },
    {
      "title": "Management",
      "Description": "The Digital Playbook is similar, but its more than just a reference document. Unlike its paper counterpart, its a dynamic, intelligent system t"
    },
    {
      "title": "Strength",
      "Description": "The Digital Playbook is similar, but its more than just a reference document. Unlike its paper counterpart, its a dynamic, intelligent system t"
    }
  ];

  lastCardDetails = [{
    "title": "Information Architecture"
  },
  {
    "title": "Personas"
  },
  {
    "title": "User Journey"
  },
  {
    "title": "Content Strategy"
  },
  {
    "title": "Wireframe"
  },
  {
    "title": "Prototype"
  },
  {
    "title": "Website Implementation"
  },
  {
    "title": "Analytics"
  }];
  title = 'digitalplaybooklanding';
  ngOnInit() {
    AOS.init();
  }
}
