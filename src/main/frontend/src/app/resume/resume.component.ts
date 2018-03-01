import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @ViewChild('activeTab') contactTab: FormTab;

  activeTab: number = 0;

  constructor() {
  }

  ngOnInit() {

  }

  onTabClick(tab: number) {
    this.contactTab.saveForm();
    this.activeTab = tab;
  }

}

export interface FormTab {
  saveForm(): void;
}
