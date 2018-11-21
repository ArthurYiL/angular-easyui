import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  filename: string = null;

  onFileSelect(event) {
    this.filename = event[0].name;
  }

  constructor() { }

  ngOnInit() {
  }

}
