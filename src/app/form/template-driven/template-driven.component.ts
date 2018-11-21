import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  user = {
    name: '',
    email: 'test@jeasyui.com',
    hero: '',
    accept: true
  };

  submitForm(value: any) {
    alert(JSON.stringify(value))
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(data => {
      for (const field in this.formErrors) {
        this.formErrors[field] = '';
        const control = this.form.form.get(field);
        if (control && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + '';
          }
        }
      }
    });
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

  formErrors = {
    name: '',
    email: ''
  };

  validationMessages = {
    name: {
      required: 'This field is required.'
    },
    email: {
      pattern: 'Please enter a valid email address.'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
