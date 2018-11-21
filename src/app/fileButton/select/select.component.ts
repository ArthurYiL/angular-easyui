import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {

  files: File[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  onFileSelect(event) {
    event.forEach((file) => {
      file.url = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
    });
    this.files = this.files.concat(event);
  }

  removeFile(file) {
    let index = this.files.indexOf(file);
    if (index >= 0) {
      this.files = this.files.filter((file, i) => i != index);
    }
  }

  ngOnInit() {
  }

}
