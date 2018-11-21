import { Component, OnInit } from '@angular/core';
import { MessagerService } from 'ng-easyui/components/messager/messager.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public messagerService: MessagerService) { }

  alert1() {
    this.messagerService.alert({
      title: 'Alert',
      msg: 'Here is a message!'
    });
  }
  alert2() {
    this.messagerService.alert({
      title: 'Error',
      icon: 'error',
      msg: 'Here is an error message!'
    });
  }
  alert3() {
    this.messagerService.alert({
      title: 'Info',
      icon: 'info',
      msg: 'Here is a info message!'
    });
  }
  alert4() {
    this.messagerService.alert({
      title: 'Question',
      icon: 'question',
      msg: 'Here is a question message!'
    });
  }
  alert5() {
    this.messagerService.alert({
      title: 'Warning',
      icon: 'warning',
      msg: 'Here is a warning message!'
    });
  }

  ngOnInit() {
  }

}
