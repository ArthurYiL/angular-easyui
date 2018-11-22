import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.css']
})
export class MultilineComponent implements OnInit {

  description: string = 'This TextBox will allow the user to enter multiple lines of text.';

  constructor() { }

  ngOnInit() {
  }

}
