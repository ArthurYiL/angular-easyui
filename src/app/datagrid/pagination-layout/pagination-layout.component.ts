import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-pagination-layout',
  templateUrl: './pagination-layout.component.html',
  styleUrls: ['./pagination-layout.component.css'],
  providers: [DataService]

})
export class PaginationLayoutComponent implements OnInit {

  total: number = 0;
  pageNumber = 1;
  pageSize = 20;
  data = [];
  pageOptions = {
    layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'tpl', 'info']
  };

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
