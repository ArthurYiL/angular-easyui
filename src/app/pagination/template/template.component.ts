import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  total: number = 114;
  pageNumber: number = 1;
  pageSize: number = 10;
  layout = ['list', 'links', 'sep', 'tpl'];

  onPageChange(event) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
  }

  constructor() { }

  ngOnInit() {
  }

}
