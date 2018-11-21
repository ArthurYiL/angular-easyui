import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  value = null;

  onItemClick(event) {
    this.value = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
