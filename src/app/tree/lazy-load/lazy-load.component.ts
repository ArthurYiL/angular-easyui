import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css'],
  providers: [DataService]
})
export class LazyLoadComponent implements OnInit {

  data: any[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNodes().subscribe((data) => this.data = data);
  }

  onNodeExpand(event) {
    let node = event;
    if (!node.children) {
      this.dataService.getNodes(node).subscribe((data) => node.children = data);
    }
  }

}
