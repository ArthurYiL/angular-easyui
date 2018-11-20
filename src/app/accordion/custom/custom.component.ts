import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  treeData: any[] = [{
    "id": 1,
    "text": "My Documents",
    "children": [{
      "id": 11,
      "text": "Photos",
      "children": [{
        "id": 111,
        "text": "Friend"
      }, {
        "id": 112,
        "text": "Wife"
      }, {
        "id": 113,
        "text": "Company"
      }]
    }, {
      "id": 12,
      "text": "Program Files",
      "state": "closed",
      "children": [{
        "id": 121,
        "text": "Intel"
      }, {
        "id": 122,
        "text": "Java"
      }, {
        "id": 123,
        "text": "Microsoft Office"
      }, {
        "id": 124,
        "text": "Games"
      }]
    }, {
      "id": 13,
      "text": "index.html"
    }, {
      "id": 14,
      "text": "about.html"
    }, {
      "id": 15,
      "text": "welcome.html"
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
