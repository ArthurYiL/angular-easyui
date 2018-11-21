import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  user: FormGroup;
  constructor(fb: FormBuilder) {
    this.user = fb.group({
      'name': [null, Validators.required],
      'email': ['test@jeasyui.com', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
      'hero': null,
      'accept': false
    });
  }

  submitForm(value: any) {
    alert(JSON.stringify(value))
  }

  heroes = [
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

  ngOnInit() {
  }

}
