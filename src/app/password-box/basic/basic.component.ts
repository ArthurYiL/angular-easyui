import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  username = null;
  password = null;

  onValueChange(event) {
    console.log(event)
  }

  constructor() { }

  ngOnInit() {
  }

}
