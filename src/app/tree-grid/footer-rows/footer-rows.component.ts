import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-footer-rows',
  templateUrl: './footer-rows.component.html',
  styleUrls: ['./footer-rows.component.css'],
  providers: [DataService]
})
export class FooterRowsComponent implements OnInit {

  data = null;
  footerData = null;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    let d = this.dataService.getData();
    this.data = d.rows;
    this.footerData = d.footerRows;
  }

}
