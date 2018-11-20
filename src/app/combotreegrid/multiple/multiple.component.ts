import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css'],
  providers: [DataService]
})
export class MultipleComponent implements OnInit {

  value = [21];
  data = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

  formatText(value: string) {
    if (this.value && this.value.length > 3) {
      return this.value.length + ' rows selected';
    }
    return value;
  }

}
