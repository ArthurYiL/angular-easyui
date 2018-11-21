import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-pagination-lazy-load',
  templateUrl: './pagination-lazy-load.component.html',
  styleUrls: ['./pagination-lazy-load.component.css'],
  providers: [DataService]
})
export class PaginationLazyLoadComponent implements OnInit {

  total: number = 0;
  pageNumber = 1;
  pageSize = 20;
  data = [];
  loading: boolean = false;

  constructor(public dataService: DataService) { }

  ngAfterViewInit() {
    this.loadPage(this.pageNumber, this.pageSize);
  }

  onPageChange(event) {
    this.loadPage(event.pageNumber, event.pageSize);
  }

  loadPage(pageNumber: number, pageSize: number) {
    this.loading = true;
    this.dataService.getData(pageNumber, pageSize).subscribe((data) => {
      this.total = data.total;
      this.pageNumber = data.pageNumber;
      this.data = data.rows;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
