import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  providers: [DataService]

})
export class BasicComponent implements OnInit {

  value: number;
  data = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }


}
