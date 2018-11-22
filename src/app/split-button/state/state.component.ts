import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  enabled = true;
  get disabled() {
    return !this.enabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
