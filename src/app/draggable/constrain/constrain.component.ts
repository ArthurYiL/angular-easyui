import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constrain',
  templateUrl: './constrain.component.html',
  styleUrls: ['./constrain.component.css']
})
export class ConstrainComponent implements OnInit {

  containerWidth: number = 500;
  containerHeight: number = 300;
  dragWidth: number = 100;
  dragHeight: number = 100;

  onDrag(event) {
    var d = event;
    if (d.left < 0) { d.left = 0 }
    if (d.top < 0) { d.top = 0 }
    if (d.left + this.dragWidth > this.containerWidth - 2) {
      d.left = this.containerWidth - 2 - this.dragWidth;
    }
    if (d.top + this.dragHeight > this.containerHeight - 2) {
      d.top = this.containerHeight - 2 - this.dragHeight;
    }
    d.target.applyDrag();
  }

  constructor() { }

  ngOnInit() {
  }

}
