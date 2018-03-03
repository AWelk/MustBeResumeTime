import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {FormService} from "../../service/form.service";

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit, FormTab {

  miscForm: FormGroup;

  constructor(private _formService: FormService) {
  }

  private static getMiscForm(): FormGroup {
    return new FormGroup({
      "skills": new FormArray([MiscComponent.getSkillForm()]),
      "expertise": new FormArray([MiscComponent.getExpertiseForm()])
    })
  }

  private static getSkillForm(): AbstractControl {
    return new FormControl(null);
  }

  private static getExpertiseForm(): AbstractControl {
    return new FormControl(null);
  }

  ngOnInit() {
    this.miscForm = this._formService.miscForm;

    if (!this.miscForm) {
      this.miscForm = MiscComponent.getMiscForm();
    }
  }

  saveForm(): void {
    console.log(this.miscForm);
    this._formService.miscForm = this.miscForm;
  }

  onAddSkill(): void {
    const skill: AbstractControl = MiscComponent.getSkillForm();
    (<FormArray>this.miscForm.get('skills')).insert(0, skill);
  }

  onDeleteSkill(skill: number) {
    (<FormArray>this.miscForm.get('skills')).removeAt(skill);
  }

  onAddExpertise(): void {
    const skill: AbstractControl = MiscComponent.getSkillForm();
    (<FormArray>this.miscForm.get('expertise')).insert(0, skill);
  }

  onDeleteExpertise(skill: number) {
    (<FormArray>this.miscForm.get('expertise')).removeAt(skill);
  }
}
