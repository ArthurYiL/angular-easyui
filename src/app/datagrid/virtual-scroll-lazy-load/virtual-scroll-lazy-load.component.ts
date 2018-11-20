import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-virtual-scroll-lazy-load',
  templateUrl: './virtual-scroll-lazy-load.component.html',
  styleUrls: ['./virtual-scroll-lazy-load.component.css'],
  providers: [DataService]
})
export class VirtualScrollLazyLoadComponent implements OnInit {

  total: number = 0;
  pageNumber = 1;
  pageSize = 20;
  rowHeight = 28;
  data = [];

  constructor(public dataService: DataService) { }

  ngAfterViewInit() {
    this.loadPage(this.pageNumber, this.pageSize);
  }

  onPageChange(event) {
    this.loadPage(event.pageNumber, event.pageSize);
  }

  loadPage(pageNumber: number, pageSize: number) {
    this.dataService.getData(pageNumber, pageSize).subscribe((data) => {
      this.total = data.total;
      this.pageNumber = data.pageNumber;
      this.data = data.rows;
    });
  }

  ngOnInit() {
  }

}
