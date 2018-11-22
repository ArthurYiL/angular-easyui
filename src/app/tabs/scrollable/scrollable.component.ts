import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.css']
})
export class ScrollableComponent implements OnInit {

  languages = ['Basic', 'Pascal', 'C++', 'Java', 'JavaScript', 'Fortran', 'Perl', 'Ruby', 'Python', 'Scratch', 'Erlang'];

  constructor() { }

  ngOnInit() {
  }

}
