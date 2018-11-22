import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  received: boolean = true;
  shared: boolean = true;
  subscribed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
