import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, FormTab {

  constructor() {
  }

  ngOnInit() {
  }

  saveForm(): void {
  }
}
