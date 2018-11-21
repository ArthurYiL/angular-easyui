import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [DataService]
})
export class PaginationComponent implements OnInit {

  total: number = 0;
  pageNumber = 1;
  pageSize = 20;
  data = [];

  constructor(public dataService: DataService) { }

  ngAfterViewInit() {
    this.dataService.getData().subscribe((data) => {
      this.total = data.total;
      this.data = data.rows;
    });
  }

  ngOnInit() {
  }

}
