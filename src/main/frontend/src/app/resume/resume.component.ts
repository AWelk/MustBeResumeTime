import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  activeTab: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onTabClick(tab: number) {
    this.activeTab = tab;
  }

}
