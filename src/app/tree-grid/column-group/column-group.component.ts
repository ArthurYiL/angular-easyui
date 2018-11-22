import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-column-group',
  templateUrl: './column-group.component.html',
  styleUrls: ['./column-group.component.css'],
  providers: [DataService]

})
export class ColumnGroupComponent implements OnInit {

  data = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
