import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  providers: [DataService]
})
export class StyleComponent implements OnInit {

  menus = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(x => this.menus = x);
  }

}
