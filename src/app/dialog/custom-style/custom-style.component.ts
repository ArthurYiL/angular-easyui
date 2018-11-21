import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-style',
  templateUrl: './custom-style.component.html',
  styleUrls: ['./custom-style.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
