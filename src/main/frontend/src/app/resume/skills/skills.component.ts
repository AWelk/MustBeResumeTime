import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, FormTab {

  constructor() {
  }

  ngOnInit() {
  }

  saveForm(): void {
  }
}
