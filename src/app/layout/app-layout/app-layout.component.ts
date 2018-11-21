import { Component, OnInit, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { LayoutComponent } from 'ng-easyui/components/layout/layout.component';
// import { LayoutComponent } from '../easyui/layout/layout.component';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent implements OnInit {

  @Input() menus;
  @Input() title = null;
  @Output() itemClick = new EventEmitter();

  width = 200;
  collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
    this.width = this.collapsed ? 50 : 200;
  }

  onItemClick(item) {
    this.itemClick.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
