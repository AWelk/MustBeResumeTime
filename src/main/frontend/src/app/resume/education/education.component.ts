import {Component, OnInit} from '@angular/core';
import {State} from '../../common/state';
import {FormGroup} from '@angular/forms';
import {StaticDataService} from '../../service/static-data.service';
import {EdFormService} from '../../service/ed-form.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edForm: FormGroup;
  states: State[];
  years: number[];

  constructor(private _edFormService: EdFormService, private _dataService: StaticDataService) {
  }

  ngOnInit() {
    this.edForm = this._edFormService.getForm();
    this.states = this._dataService.states;
    this.years = this._dataService.years;
  }

  onAddInstitution(): void {
    this._edFormService.addInstitution();
  }

  onDeleteInstitution(institution: number) {
    this._edFormService.deleteInstitution(institution);
  }
}
