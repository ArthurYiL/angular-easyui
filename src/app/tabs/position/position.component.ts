import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

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
