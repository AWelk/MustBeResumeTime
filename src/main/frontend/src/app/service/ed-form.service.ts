import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {EdForm} from '../common/ed-form';
import {Institution} from '../common/institution';

@Injectable()
export class EdFormService {

  private _edForm: FormGroup;
  private _edSub$: BehaviorSubject<FormGroup>;

  constructor() {
    this._edForm = EdFormService.initInstitutionsForm();
    this._edSub$ = new BehaviorSubject<FormGroup>(this._edForm);
  }

  private static initInstitutionsForm(edForm?: EdForm): FormGroup {
    if (edForm) {
      return new FormGroup({
        'institutions': this.getInstitutionsForm(edForm.institutions)
      });
    } else {
      return new FormGroup({
        'institutions': this.getInstitutionsForm()
      });
    }
  }

  private static getInstitutionsForm(institutions?: Institution[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (institutions) {
      institutions.forEach(inst => list.push(this.getInstitutionForm(inst)));
    } else {
      list.push(this.getInstitutionForm());
    }
    return list;
  }

  private static getInstitutionForm(institution?: Institution): FormGroup {
    const inst: FormGroup = new FormGroup({
      'institution': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(''),
      'degree': new FormControl(''),
      'startDate': new FormControl(''),
      'endDate': new FormControl(''),
      'achievements': new FormControl(null)
    });
    if (institution) {
      inst.setValue(institution);
    }
    return inst;
  }

  addInstitution(): void {
    const institution: FormGroup = EdFormService.getInstitutionForm();
    (<FormArray>this._edForm.get('institutions')).insert(0, institution);
    this._edSub$.next(this._edForm);
  }

  deleteInstitution(institution: number) {
    (<FormArray>this._edForm.get('institutions')).removeAt(institution);
    this._edSub$.next(this._edForm);
  }


  getForm(): Observable<FormGroup> {
    return this._edSub$.asObservable();
  }

  resetForm(): void {
    this._edForm = EdFormService.initInstitutionsForm();
    this._edSub$.next(this._edForm);
  }

  loadForm(edForm: EdForm) {
    this._edForm = EdFormService.initInstitutionsForm(edForm);
    this._edSub$.next(this._edForm);
  }
}
