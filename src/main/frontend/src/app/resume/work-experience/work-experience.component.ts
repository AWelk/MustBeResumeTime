import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {State} from "../../common/State";
import {WorkFormService} from "../../service/work-form.service";
import {StaticDataService} from "../../service/static-data.service";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workForm: FormGroup;
  states: State[];
  years: number[];

  constructor(private _workFormService: WorkFormService, private _dataService: StaticDataService) {
  }

  ngOnInit() {
    this.workForm = this._workFormService.getForm();
    this.states = this._dataService.states;
    this.years = this._dataService.years;
  }

  onAddPosition(workplace: number): void {
    this._workFormService.addPosition(workplace);
  }

  onDeletePosition(position: number, workplace: number): void {
    this._workFormService.deletePosition(position, workplace);
  }

  onAddResponsibility(workplace: number): void {
    this._workFormService.addResponsibility(workplace);
  }

  onDeleteResponsibility(responsibility: number, workplace: number): void {
    this._workFormService.deleteResponsibility(responsibility, workplace);
  }

  onAddWorkPlace(): void {
    this._workFormService.addWorkPlace()
  }

  onDeleteWorkplace(workplace: number) {
    this._workFormService.deleteWorkplace(workplace);
  }
}
