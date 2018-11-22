import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  plain: boolean = false;
  narrow: boolean = false;
  justified: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
