import { Component, OnInit } from '@angular/core';
import { MessagerService } from 'ng-easyui/components/messager/messager.service';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {

  constructor(public messagerService: MessagerService) { }

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

  prompt() {
    this.messagerService.prompt({
      title: 'Prompt',
      msg: 'Please type something',
      result: (r) => {
        if (r) {
          alert('you type: ' + r);
        }
      }
    });
  }

  ngOnInit() {
  }

}
