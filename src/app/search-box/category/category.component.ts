import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  value;

  onSearch(event) {
    this.value = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
