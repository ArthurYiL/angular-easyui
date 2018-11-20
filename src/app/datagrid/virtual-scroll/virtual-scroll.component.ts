import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
  providers: [DataService]
})
export class VirtualScrollComponent implements OnInit {

  total: number = 10000;
  pageNumber = 1;
  pageSize = 20;
  rowHeight = 28;
  data = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(this.total).subscribe((data) => {
      this.data = data.rows;
    });
  }

}
