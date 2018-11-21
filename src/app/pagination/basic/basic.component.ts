import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  total: number = 114;
  pageNumber: number = 1;
  pageSize: number = 10;

  onPageChange(event) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
  }

  constructor() { }

  ngOnInit() {
  }

}
