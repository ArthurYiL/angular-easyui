import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
  providers: [DataService]

})
export class SortingComponent implements OnInit {

  total: number = 1000;
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
