import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menus = [{
    text: 'Forms',
    iconCls: 'fa fa-wpforms',
    state: 'open',
    children: [{
      text: 'Form Element'
    }, {
      text: 'Wizard'
    }, {
      text: 'File Upload'
    }]
  }, {
    text: 'Mail',
    iconCls: 'fa fa-at',
    selected: true,
    children: [{
      text: 'Inbox'
    }, {
      text: 'Sent'
    }, {
      text: 'Trash',
      children: [{
        text: 'Item1'
      }, {
        text: 'Item2'
      }]
    }]
  }, {
    text: 'Layout',
    iconCls: 'fa fa-table',
    children: [{
      text: 'Panel'
    }, {
      text: 'Accordion'
    }, {
      text: 'Tabs'
    }]
  }];

  selectedMenu = null;

  onItemClick(item) {
    this.selectedMenu = item;
  }

  constructor() { }

  ngOnInit() {
  }

}
