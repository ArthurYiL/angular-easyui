import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  height: number = 250;
  total: number = 10000;
  data: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  rowHeight: number = 60;

  ngOnInit() {
    for (let i = 0; i < this.total; i++) {
      this.data.push({
        id: i,
        name: 'name' + i,
        addr: 'address' + i,
        desp: 'description' + i
      });
    }
  }

}
