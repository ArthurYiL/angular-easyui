import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {

  value = new Date();

  constructor() { }

  ngOnInit() {
  }

}
