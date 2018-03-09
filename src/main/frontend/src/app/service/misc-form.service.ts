import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {FormService} from "./FormService";

@Injectable()
export class MiscFormService implements FormService {

  private _miscForm: FormGroup;

  constructor() {
    this._miscForm = MiscFormService.initMiscForm();
  }

  private static initMiscForm(): FormGroup {
    return new FormGroup({
      "skills": new FormArray([MiscFormService.getSkillForm()]),
      "expertise": new FormArray([MiscFormService.getExpertiseForm()])
    })
  }

  private static getSkillForm(): AbstractControl {
    return new FormControl(null);
  }

  private static getExpertiseForm(): AbstractControl {
    return new FormControl(null);
  }

  addSkill(): void {
    const skill: AbstractControl = MiscFormService.getSkillForm();
    (<FormArray>this._miscForm.get('skills')).insert(0, skill);
  }

  deleteSkill(skill: number) {
    (<FormArray>this._miscForm.get('skills')).removeAt(skill);
  }

  addExpertise(): void {
    const skill: AbstractControl = MiscFormService.getSkillForm();
    (<FormArray>this._miscForm.get('expertise')).insert(0, skill);
  }

  deleteExpertise(expertise: number) {
    (<FormArray>this._miscForm.get('expertise')).removeAt(expertise);
  }

  getForm(): FormGroup {
    return this._miscForm;
  }

  resetForm(): void {
    this._miscForm = MiscFormService.initMiscForm();
  }

}
