import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  panelIndex: number = 4;
  selectedIndex: number = 0;
  panels = [
    { title: 'Title1', content: 'Content1' },
    { title: 'Title2', content: 'Content2' },
    { title: 'Title3', content: 'Content3' }
  ];

  add() {
    if (this.panels.length >= 6) {
      return;
    }
    this.panels.push({
      title: 'Title' + this.panelIndex,
      content: 'Content' + this.panelIndex
    });
    setTimeout(() => {
      this.selectedIndex = this.panels.length - 1;
      this.panelIndex++;
    });
  }

  remove(index: number) {
    this.panels.splice(index, 1);
    this.selectedIndex = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
