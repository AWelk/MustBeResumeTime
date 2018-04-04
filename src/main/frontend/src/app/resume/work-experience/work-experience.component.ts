import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {State} from '../../common/state';
import {WorkFormService} from '../../service/work-form.service';
import {StaticDataService} from '../../service/static-data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
  private _workSub$: Subscription;
  private _stateSub$: Subscription;
  workForm: FormGroup;
  states: State[];
  years: number[];

  constructor(private _workFormService: WorkFormService, private _dataService: StaticDataService) {
  }

  get workplacesArray(): FormArray {
    return <FormArray>this.workForm.get('workplaces');
  }

  ngOnInit() {
    this._workSub$ = this._workFormService.getForm().subscribe(form => this.workForm = form);
    this._stateSub$ = this._dataService.states.subscribe(states => this.states = states);
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

  ngOnDestroy(): void {
    this._workSub$.unsubscribe();
    this._stateSub$.unsubscribe();
  }

  onDeleteWorkplace(workplace: number) {
    this._workFormService.deleteWorkplace(workplace);
  }

  onAddWorkPlace(): void {
    this._workFormService.addWorkPlace();
  }
}
