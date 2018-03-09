import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {AbstractControl} from "@angular/forms/src/model";
import {FormService} from "./FormService";

@Injectable()
export class WorkFormService implements FormService {

  private _workForm: FormGroup;

  constructor() {
    this._workForm = WorkFormService.initWorkExperienceForm();
  }

  private static getWorkplaceForm(): FormGroup {
    return new FormGroup({
      "employerName": new FormControl(null),
      "city": new FormControl(null),
      "state": new FormControl(''),
      "positions": new FormArray([WorkFormService.getPositionForm()]),
      "description": new FormControl(null),
      "responsibilities": new FormArray([WorkFormService.getResponsibilityForm()])
    });
  }

  private static getPositionForm(): AbstractControl {
    return new FormGroup({
      "position": new FormControl(null),
      "startDate": new FormControl(""),
      "endDate": new FormControl('')
    });
  }

  private static getResponsibilityForm(): AbstractControl {
    return new FormControl(null);
  }

  private static initWorkExperienceForm(): FormGroup {
    return new FormGroup({
      "workplaces": new FormArray([WorkFormService.getWorkplaceForm()])
    });
  }

  addPosition(workplace: number): void {
    const position: AbstractControl = WorkFormService.getPositionForm();
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('positions')).at(0).disable();
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('positions')).insert(0, position);
  }

  deletePosition(position: number, workplace: number): void {
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('positions')).removeAt(position);
  }

  addResponsibility(workplace: number): void {
    const responsibility: AbstractControl = WorkFormService.getResponsibilityForm();
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('responsibilities')).at(0).disable();
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('responsibilities')).insert(0, responsibility);
  }

  deleteResponsibility(responsibility: number, workplace: number): void {
    (<FormArray>(<FormArray>this._workForm.get("workplaces")).at(workplace).get('responsibilities')).removeAt(responsibility);
  }

  addWorkPlace(): void {
    const workplace: FormGroup = WorkFormService.getWorkplaceForm();
    (<FormArray>this._workForm.get('workplaces')).insert(0, workplace);
  }

  deleteWorkplace(workplace: number) {
    (<FormArray>this._workForm.get('workplaces')).removeAt(workplace);
  }

  getForm(): FormGroup {
    return this._workForm;
  }

  resetForm(): void {
    this._workForm = WorkFormService.initWorkExperienceForm();
  }

}
