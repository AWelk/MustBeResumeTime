import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";
import {FormService} from "../../service/form.service";
import {State} from "../../common/State";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, FormTab {
  edForm: FormGroup;
  states: State[];
  years: number[];

  private static getInstitutionForm(): FormGroup {
    return new FormGroup({
      "institution": new FormControl(null),
      "city": new FormControl(null),
      "state": new FormControl(""),
      "degree": new FormControl(""),
      "startDate": new FormControl(""),
      "endDate": new FormControl(""),
      "achievements": new FormControl(null)
    });
  }

  constructor(private formService: FormService) {
  }

  private static getInstitutionsForm(): FormGroup {
    return new FormGroup({
      "institutions": new FormArray([EducationComponent.getInstitutionForm()])
    });
  }

  ngOnInit() {
    this.edForm = this.formService.edForm;

    if (!this.edForm) {
      this.edForm = EducationComponent.getInstitutionsForm();
    }

    this.states = this.formService.states;
    this.years = this.formService.years;
  }

  saveForm(): void {
    console.log(this.edForm);
    this.formService.edForm = this.edForm;
  }

  onAddInstitution(): void {
    const institution: FormGroup = EducationComponent.getInstitutionForm();
    (<FormArray>this.edForm.get('institutions')).insert(0, institution);
  }

  onDeleteInstitution(institution: number) {
    (<FormArray>this.edForm.get('institutions')).removeAt(institution);
  }
}
