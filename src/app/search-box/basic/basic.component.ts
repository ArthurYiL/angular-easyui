import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  value: string;

  onSearch(event) {
    this.value = event.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
