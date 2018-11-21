import { Component, OnInit } from '@angular/core';
import { MessagerService } from 'ng-easyui/components/messager/messager.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor(public messagerService: MessagerService) { }

  alert() {
    this.messagerService.alert({
      title: 'Alert',
      msg: 'Here is a message!'
    });
  }

  confirm() {
    this.messagerService.confirm({
      title: 'Confirm',
      msg: 'Are you confirm this?',
      result: (r) => {
        if (r) {
          alert('confirmed: ' + r);
        }
      }
    });
  }

  ngOnInit() {
  }

}
