import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {

  numbers = [{
    label: 'Number in the United States',
    groupSeparator: ',',
    decimalSeparator: '.'
  }, {
    label: 'Number in France',
    groupSeparator: ' ',
    decimalSeparator: ','
  }, {
    label: 'Currency:USD',
    groupSeparator: ',',
    decimalSeparator: '.',
    prefix: '$'
  }, {
    label: 'Currency:EUR',
    groupSeparator: ',',
    decimalSeparator: ' ',
    prefix: '€'
  }, {
    label: 'Currency:EUR',
    groupSeparator: ' ',
    decimalSeparator: ',',
    suffix: '€'
  }];

  constructor() { }

  ngOnInit() {
  }

}
