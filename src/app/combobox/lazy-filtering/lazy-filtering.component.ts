import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-filtering',
  templateUrl: './lazy-filtering.component.html',
  styleUrls: ['./lazy-filtering.component.css']
})
export class LazyFilteringComponent implements OnInit {

  data: any[] = null;
  source = [
    { value: 11, text: 'Mr. Nice' },
    { value: 12, text: 'Narco' },
    { value: 13, text: 'Bombasto' },
    { value: 14, text: 'Celeritas' },
    { value: 15, text: 'Magneta' },
    { value: 16, text: 'RubberMan' },
    { value: 17, text: 'Dynama' },
    { value: 18, text: 'Dr IQ' },
    { value: 19, text: 'Magma' },
    { value: 20, text: 'Tornado' }
  ];

  onFilterChange(event) {
    let q = event.filterValue || '';
    this.data = this.source.filter((item) => item.text.indexOf(q) != -1);
  }

  constructor() { }

  ngOnInit() {
  }

}
