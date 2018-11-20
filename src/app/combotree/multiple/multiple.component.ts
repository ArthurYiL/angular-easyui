import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  value: number[] = [122, 124];

  data: any[] = [{
    "id": 1,
    "text": "My Documents",
    "children": [{
      "id": 11,
      "text": "Photos",
      "state": "closed",
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

  formatText(value: string) {
    if (this.value && this.value.length > 3) {
      return this.value.length + ' nodes selected';
    }
    return value;
  }

  constructor() { }

  ngOnInit() {
  }

}
