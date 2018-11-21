import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  value = new Date();
  isSpecialDate(date) {
    let day = date.getDate();
    if (day == 10 || day == 20 || day == 30) {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
