import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {

  lazy: boolean = true;
  height: number = 250;
  total: number = 10000;
  data: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  rowHeight: number = 60;

  onPageChange(event) {
    setTimeout(() => {
      this.pageNumber = event.pageNumber;
      let data = [];
      let start = (this.pageNumber - 1) * this.pageSize;
      for (let i = start; i < start + this.pageSize; i++) {
        data.push({
          id: i,
          name: 'name' + i,
          addr: 'address' + i,
          desp: 'description' + i
        });
      }
      this.data = data;
    }, 250);
  }

  constructor() { }

  ngOnInit() {
  }

}
