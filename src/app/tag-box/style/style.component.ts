import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  value = ["3", "4"];

  data = [{
    "id": "1",
    "text": "Java"
  }, {
    "id": "2",
    "text": "C#"
  }, {
    "id": "3",
    "text": "Ruby"
  }, {
    "id": "4",
    "text": "Perl"
  }, {
    "id": "5",
    "text": "Basic"
  }];

  tagCss(row) {
    if (row.id == 3) {
      return {
        background: '#ffd7d7',
        color: '#c65353'
      };
    } else if (row.id == 4) {
      return {
        background: '#b8eecf',
        color: '#45872c'
      };
    } else {
      return null;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
