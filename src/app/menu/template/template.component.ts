import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  items = [
    { text: 'Inbox', count: 127 },
    { text: 'Starred' },
    { text: 'Important' },
    { text: 'Sent Mail', count: 32 },
    { text: 'Drafts' },
    { text: 'Spam', count: 345 },
    { text: 'Trash' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
