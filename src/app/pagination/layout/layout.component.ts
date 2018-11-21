import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  total: number = 114;
  pageNumber: number = 1;
  pageSize: number = 10;
  layout1 = ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'info'];
  layout2 = ['first', 'prev', 'next', 'last', 'info'];
  layout3 = ['links', 'info'];

  onPageChange(event) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
  }

  constructor() { }

  ngOnInit() {
  }

}
