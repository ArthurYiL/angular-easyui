import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

  value = 11;
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

  constructor() { }

  ngOnInit() {
  }

}
