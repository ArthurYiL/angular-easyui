import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-number',
  templateUrl: './week-number.component.html',
  styleUrls: ['./week-number.component.css']
})
export class WeekNumberComponent implements OnInit {

  value = new Date();

  constructor() { }

  ngOnInit() {
  }

}
