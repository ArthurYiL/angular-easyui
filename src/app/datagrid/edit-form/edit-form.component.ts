import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'eui-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input() closed = true;

  _row: any;

  @Input()
  get row() {
    return this._row;
  }
  set row(value: any) {
    this._row = value;
    this.formGroup.reset(this._row);
  }

  @Input() isNewRow = false;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      'itemid': [null, Validators.required],
      'name': [null, Validators.required],
      'listprice': null,
      'unitcost': null,
      'attr': null
    });
  }

  onSave() {
    if (this.formGroup.valid) {
      Object.assign(this.row, this.formGroup.value);
      this.save.emit(this.row);
    }

  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnInit() {
  }

}
