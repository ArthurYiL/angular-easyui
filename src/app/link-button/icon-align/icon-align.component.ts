import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-align',
  templateUrl: './icon-align.component.html',
  styleUrls: ['./icon-align.component.css']
})
export class IconAlignComponent implements OnInit {

  align: string = 'left';
  alignOptions = [
    { value: 'left', text: 'Left' },
    { value: 'right', text: 'Right' },
    { value: 'top', text: 'Top' },
    { value: 'bottom', text: 'Bottom' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
