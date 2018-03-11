import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {FormService} from './FormService';

@Injectable()
export class EdFormService implements FormService {

  private _edForm: FormGroup;

  constructor() {
    this._edForm = EdFormService.initInstitutionsForm();
  }

  private static initInstitutionsForm(): FormGroup {
    return new FormGroup({
      'institutions': new FormArray([EdFormService.getInstitutionForm()])
    });
  }

  private static getInstitutionForm(): FormGroup {
    return new FormGroup({
      'institution': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(''),
      'degree': new FormControl(''),
      'startDate': new FormControl(''),
      'endDate': new FormControl(''),
      'achievements': new FormControl(null)
    });
  }

  addInstitution(): void {
    const institution: FormGroup = EdFormService.getInstitutionForm();
    (<FormArray>this._edForm.get('institutions')).insert(0, institution);
  }

  deleteInstitution(institution: number) {
    (<FormArray>this._edForm.get('institutions')).removeAt(institution);
  }


  getForm(): FormGroup {
    return this._edForm;
  }

  resetForm(): void {
    this._edForm = EdFormService.initInstitutionsForm();
  }
}
