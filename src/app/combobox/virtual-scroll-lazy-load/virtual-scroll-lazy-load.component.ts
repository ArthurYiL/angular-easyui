import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-virtual-scroll-lazy-load',
  templateUrl: './virtual-scroll-lazy-load.component.html',
  styleUrls: ['./virtual-scroll-lazy-load.component.css'],
  providers: [DataService]
})
export class VirtualScrollLazyLoadComponent implements OnInit {

  data: any[] = [];
  total: number = 0;
  pageNumber: number = 1;
  pageSize: number = 20;
  rowHeight: number = 30;

  constructor(public dataService: DataService) { }

  onFilterChange(event) {
    this.dataService.getData(event.filterValue, event.pageNumber, event.pageSize).subscribe((data) => {
      this.total = data.total;
      this.pageNumber = data.pageNumber;
      this.data = data.rows;
    });
  }

  ngOnInit() {
  }

}
