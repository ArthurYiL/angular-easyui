import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  providers: [DataService]
})
export class DynamicComponent implements OnInit {

  panelIndex: number = 4;
  selectedIndex: number = 0;
  panels = null;

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

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.panels = this.dataService.getData().subscribe(x => this.panels = x);
  }

}
