import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  value = ["3"];

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

  constructor() { }

  ngOnInit() {
  }

}
