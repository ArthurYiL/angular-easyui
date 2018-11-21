import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-dialog-editing',
  templateUrl: './dialog-editing.component.html',
  styleUrls: ['./dialog-editing.component.css'],
  providers: [DataService]
})
export class DialogEditingComponent implements OnInit {

  data = null;
  isNewRow = false;
  editingRow = null;
  closed = true;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.initRow();
  }

  initRow() {
    this.editingRow = {
      itemid: null,
      name: null,
      listprice: null,
      unitcost: null,
      addr: null,
    };
  }

  onAddRow() {
    this.initRow();
    this.isNewRow = true;
    this.closed = false;
  }

  onEditRow(row) {
    this.isNewRow = false;
    this.editingRow = row;
    this.closed = false;
  }

  onSaveRow(row) {
    if (this.isNewRow) {
      this.dataService.add(row);
    } else {
      this.dataService.update(row);
    }
    this.data = this.dataService.getData();
    this.closed = true;
    this.isNewRow = false;
  }

  onDeleteRow(row) {
    this.dataService.delete(row);
    this.data = this.dataService.getData();
  }

}
