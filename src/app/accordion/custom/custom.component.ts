import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [DataService]
})
export class CustomComponent implements OnInit {

  treeData = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.treeData = this.dataService.getData().subscribe(x => this.treeData = x);
  }

}
