import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.css']
})
export class MultipleSelectComponent implements OnInit {

  value: number[] = null;
  data = [
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

  formatText(value: string) {
    if (this.value && this.value.length > 3) {
      return this.value.length + ' items selected';
    }
    return value;
  }

  constructor() { }

  ngOnInit() {
  }

}
