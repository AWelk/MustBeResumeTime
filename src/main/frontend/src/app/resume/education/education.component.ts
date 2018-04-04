import {Component, OnDestroy, OnInit} from '@angular/core';
import {State} from '../../common/state';
import {FormArray, FormGroup} from '@angular/forms';
import {StaticDataService} from '../../service/static-data.service';
import {EdFormService} from '../../service/ed-form.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {
  private _edSub$: Subscription;
  private _stateSub$: Subscription;
  edForm: FormGroup;
  states: State[];
  years: number[];

  constructor(private _edFormService: EdFormService, private _dataService: StaticDataService) {
  }

  get institutionsArray(): FormArray {
    return <FormArray>this.edForm.get('institutions');
  }

  ngOnInit() {
    this._edSub$ = this._edFormService.getForm().subscribe(form => this.edForm = form);
    this._stateSub$ = this._dataService.states.subscribe(states => this.states = states);
    this.years = this._dataService.years;
  }

  onAddInstitution(): void {
    this._edFormService.addInstitution();
  }

  onDeleteInstitution(institution: number) {
    this._edFormService.deleteInstitution(institution);
  }

  ngOnDestroy(): void {
    this._edSub$.unsubscribe();
    this._stateSub$.unsubscribe();
  }
}
