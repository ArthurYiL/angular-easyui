import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frozen-column',
  templateUrl: './frozen-column.component.html',
  styleUrls: ['./frozen-column.component.css']
})
export class FrozenColumnComponent implements OnInit {

  options1: any;
  options2: any;

  constructor() { }

  ngOnInit() {
    this.options1 = {
      polar: {},
      angleAxis: {
        min: 0,
        max: 360,
        interval: 30,
        startAngle: 45
      },
      radiusAxis: {
        min: 0,
        max: 10,
        interval: 2
      },
      series: []
    };

    this.options2 = {
      polar: {},
      angleAxis: {
        min: 0,
        max: 360,
        interval: 30,
        clockwise: false
      },
      radiusAxis: {
        min: 0,
        max: 10,
        interval: 2
      },
      series: []
    };
  }

}
