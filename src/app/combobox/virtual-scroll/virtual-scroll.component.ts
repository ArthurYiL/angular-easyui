import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  data: any[] = [];
  total: number = 10000;
  pageSize: number = 20;
  rowHeight: number = 30;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.total; i++) {
      this.data.push({
        id: i,
        name: 'Item' + i
      });
    }
  }

}
