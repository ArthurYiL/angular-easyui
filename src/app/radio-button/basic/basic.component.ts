import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  value = null;

  fruits = ['Apple', 'Orange', 'Banana'];

  constructor() { }

  ngOnInit() {
  }

}
