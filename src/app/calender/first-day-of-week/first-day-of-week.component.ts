import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-day-of-week',
  templateUrl: './first-day-of-week.component.html',
  styleUrls: ['./first-day-of-week.component.css']
})
export class FirstDayOfWeekComponent implements OnInit {

  value = new Date();
  firstDay: number = 0;
  data = [
    { value: 0, text: 'Sunday' },
    { value: 1, text: 'Monday' },
    { value: 2, text: 'Tuesday' },
    { value: 3, text: 'Wednesday' },
    { value: 4, text: 'Thursday' },
    { value: 5, text: 'Friday' },
    { value: 6, text: 'Saturday' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
