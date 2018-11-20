import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disable-date',
  templateUrl: './disable-date.component.html',
  styleUrls: ['./disable-date.component.css']
})
export class DisableDateComponent implements OnInit {

  value = new Date();
  validator = (date) => {
    if (date.getDay() === 1 || date.getDay() === 2) {
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
