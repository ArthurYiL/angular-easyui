import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers: [DataService]

})
export class TemplateComponent implements OnInit {

  data = null;
  footerData = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.footerData = {
      name: 'Total Persons:',
      persons: this.sum(this.data)
    };
  }

  sum(data) {
    let persons = 0;
    for (let row of data) {
      persons += row.persons || 0;
      if (row.children) {
        persons += this.sum(row.children);
      }
    }
    return persons;
  }

}
