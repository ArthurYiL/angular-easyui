import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-first-day-of-week',
  templateUrl: './first-day-of-week.component.html',
  styleUrls: ['./first-day-of-week.component.css'],
  providers: [DataService]
})
export class FirstDayOfWeekComponent implements OnInit {

  value = new Date();
  firstDay: number = 0;
  data = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(x => this.data = x);
  }

}
