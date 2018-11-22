import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  time = '08:30';
  inputStyle = {
    textAlign: 'center',
    fontSize: '16px'
  };

  constructor() { }

  ngOnInit() {
  }

}
