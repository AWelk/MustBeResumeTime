import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {WorkForm} from '../common/work-form';
import {Workplace} from '../common/workplace';
import {Position} from '../common/position';

@Injectable()
export class WorkFormService {
  private _workForm: FormGroup;
  private _workSub$: BehaviorSubject<FormGroup>;

  constructor() {
    this._workForm = WorkFormService.initWorkExperienceForm();
    this._workSub$ = new BehaviorSubject<FormGroup>(this._workForm);
  }

  private static initWorkExperienceForm(workForm?: WorkForm): FormGroup {
    if (workForm) {
      return new FormGroup({
        'workplaces': this.getWorkplacesForm(workForm.workplaces)
      });
    } else {
      return new FormGroup({
        'workplaces': this.getWorkplacesForm()
      });
    }
  }

  private static getWorkplacesForm(places?: Workplace[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (places) {
      places.forEach(place => list.push(this.getWorkplaceForm(place)));
    } else {
      list.push(this.getWorkplaceForm());
    }
    return list;
  }

  private static getWorkplaceForm(place?: Workplace): FormGroup {
    if (place) {
      return new FormGroup({
        'employerName': new FormControl(place.employerName),
        'city': new FormControl(place.city),
        'state': new FormControl(place.state),
        'positions': this.getPositionsForm(place.positions),
        'description': new FormControl(place.description),
        'responsibilities': this.getResponsibilitiesForm(place.responsibilities)
      });
    } else {
      return new FormGroup({
        'employerName': new FormControl(null),
        'city': new FormControl(null),
        'state': new FormControl(''),
        'positions': this.getPositionsForm(),
        'description': new FormControl(null),
        'responsibilities': this.getResponsibilitiesForm()
      });
    }
  }

  private static getPositionsForm(positions?: Position[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (positions) {
      positions.forEach(position => list.push(this.getPositionForm(position)));
    } else {
      list.push(this.getPositionForm());
    }
    return list;
  }

  private static getPositionForm(position?: Position): FormGroup {
    if (position) {
      return new FormGroup({
        'position': new FormControl(position.position),
        'startDate': new FormControl(position.startDate),
        'endDate': new FormControl(position.endDate)
      });
    } else {
      return new FormGroup({
        'position': new FormControl(null),
        'startDate': new FormControl(''),
        'endDate': new FormControl('')
      });
    }
  }

  private static getResponsibilitiesForm(responsibilities?: String[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (responsibilities) {
      responsibilities.forEach(res => list.push(this.getResponsibilityForm(res)));
    } else {
      list.push(this.getResponsibilityForm());
    }
    return list;
  }

  private static getResponsibilityForm(responsibility?: String): AbstractControl {
    if (responsibility) {
      return new FormControl(responsibility);
    } else {
      return new FormControl(null);
    }
  }

  addPosition(workplace: number): void {
    const position: AbstractControl = WorkFormService.getPositionForm();
    (<FormArray>(<FormArray>this._workForm.get('workplaces')).at(workplace).get('positions')).insert(0, position);
    this._workSub$.next(this._workForm);
  }

  deletePosition(position: number, workplace: number): void {
    (<FormArray>(<FormArray>this._workForm.get('workplaces')).at(workplace).get('positions')).removeAt(position);
    this._workSub$.next(this._workForm);
  }

  addResponsibility(workplace: number): void {
    const responsibility: AbstractControl = WorkFormService.getResponsibilityForm();
    (<FormArray>(<FormArray>this._workForm.get('workplaces')).at(workplace).get('responsibilities')).insert(0, responsibility);
    this._workSub$.next(this._workForm);
  }

  deleteResponsibility(responsibility: number, workplace: number): void {
    (<FormArray>(<FormArray>this._workForm.get('workplaces')).at(workplace).get('responsibilities')).removeAt(responsibility);
    this._workSub$.next(this._workForm);
  }

  addWorkPlace(): void {
    const workplace: FormGroup = WorkFormService.getWorkplaceForm();
    (<FormArray>this._workForm.get('workplaces')).insert(0, workplace);
    this._workSub$.next(this._workForm);
  }

  deleteWorkplace(workplace: number) {
    (<FormArray>this._workForm.get('workplaces')).removeAt(workplace);
    this._workSub$.next(this._workForm);
  }

  getForm(): Observable<FormGroup> {
    return this._workSub$.asObservable();
  }

  resetForm(): void {
    this._workForm = WorkFormService.initWorkExperienceForm();
    this._workSub$.next(this._workForm);
  }

  loadForm(workForm: WorkForm) {
    this._workForm = WorkFormService.initWorkExperienceForm(workForm);
    this._workSub$.next(this._workForm);
  }
}
