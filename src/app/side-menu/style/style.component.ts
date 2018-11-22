import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StyleComponent implements OnInit {

  width = 200;
  collapsed = false;
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

  toggle() {
    this.collapsed = !this.collapsed;
    this.width = this.collapsed ? 50 : 200;
  }

  constructor() { }

  ngOnInit() {
  }

}
