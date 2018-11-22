import { Component, OnInit } from '@angular/core';

import { Dy1Component } from './dy1.component';
import { Dy2Component } from './dy2.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {

  selectedIndex = 0;
  tabs = [];

  onTabClose(panel) {
    this.tabs = this.tabs.filter(p => p.title != panel.title);
  }

  getTabIndex(title) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].title == title) {
        return i;
      }
    }
    return -1;
  }

  addTab(tab) {
    let index = this.getTabIndex(tab.title);
    if (index == -1) {
      this.tabs.push(tab);
      setTimeout(() => this.selectedIndex = this.tabs.length);
    } else {
      this.selectedIndex = index + 1;
    }
  }

  addDataGrid(tt) {
    let tab = { title: 'DataGrid', component: Dy1Component };
    this.addTab(tab);
  }

  addNewTab() {
    let tab = { title: 'NewTab', component: Dy2Component };
    this.addTab(tab);
  }

  position = 'top';
  positions = [
    { value: 'top', text: 'Top' },
    { value: 'bottom', text: 'Bottom' },
    { value: 'left', text: 'Left' },
    { value: 'right', text: 'Right' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
