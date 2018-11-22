import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-frozen-column',
  templateUrl: './frozen-column.component.html',
  styleUrls: ['./frozen-column.component.css'],
  providers: [DataService]

})
export class FrozenColumnComponent implements OnInit {

  data = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
