import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
  providers: [DataService]
})
export class VirtualScrollComponent implements OnInit {

  total = 10000;
  pageSize = 20;
  data = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(this.total).subscribe((data) => {
      this.data = data.rows;
    });
  }

}
