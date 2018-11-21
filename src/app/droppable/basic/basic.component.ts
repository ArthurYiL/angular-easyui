import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  dropped: boolean = false;
  isover: boolean = false;

  onDragEnter() {
    this.isover = true;
  }

  onDragLeave() {
    this.isover = false;
  }

  onDrop() {
    this.dropped = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
