import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  menus = [{
    text: 'Forms',
    iconCls: 'wpforms',
    submenus: ['Form Element', 'Wizard', 'File Upload']
  }, {
    text: 'Mail',
    iconCls: 'at',
    submenus: ['Inbox', 'Sent', 'Trash']
  }, {
    text: 'Layout',
    iconCls: 'table',
    submenus: ['Panel', 'Accordion', 'Tabs']
  }];

  constructor() { }

  ngOnInit() {
  }

}
