import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
  providers: [DataService]
})
export class AutoCompleteComponent implements OnInit {

  data: any[] = [];

  constructor(public dataService: DataService) { }

  onFilterChange(event) {
    let q = event.filterValue || '';
    if (q.length >= 3) {
      this.dataService.getData(q).subscribe(items => this.data = items);
    }
  }

  ngOnInit() {
  }

}
