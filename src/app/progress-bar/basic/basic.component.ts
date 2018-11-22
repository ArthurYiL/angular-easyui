import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  value = 0;
  disabled = false;

  run() {
    this.disabled = true;
    let timeout = Math.random() * 500;
    setTimeout(() => {
      this.value += Math.floor(Math.random() * 10);
      if (this.value > 100) {
        this.value = 100;
        this.disabled = false;
      } else {
        this.run();
      }
    }, timeout);
  }

  constructor() { }

  ngOnInit() {
  }

}
