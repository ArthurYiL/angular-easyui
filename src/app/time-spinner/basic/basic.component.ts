import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  time1 = '01:20';
  time2 = '15:50';

  constructor() { }

  ngOnInit() {
  }

}
