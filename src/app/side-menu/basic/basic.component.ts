import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  width = 200;
  collapsed = false;
  selection = null;
  menus = [{
    text: 'Item1',
    iconCls: 'icon-sum',
    state: 'open',
    children: [{
      text: 'Option1'
    }, {
      text: 'Option2'
    }, {
      text: 'Option3',
      children: [{
        text: 'Option31'
      }, {
        text: 'Option32'
      }]
    }]
  }, {
    text: 'Item2',
    iconCls: 'icon-more',
    children: [{
      text: 'Option4'
    }, {
      text: 'Option5'
    }, {
      text: 'Option6'
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
