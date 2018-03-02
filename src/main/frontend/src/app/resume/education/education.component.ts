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

  constructor(private formService: FormService) {
  }

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

  ngOnInit() {
    this.edForm = this.formService.getEdForm();

    if (!this.edForm) {

      this.edForm = new FormGroup({
        "institutions": new FormArray([EducationComponent.getInstitutionForm()])
      });
    }

    this.states = this.formService.getStates();
    this.years = this.formService.getYears();
  }

  saveForm(): void {
    console.log(this.edForm);
    this.formService.saveEdForm(this.edForm);
  }

  onAddInstitution(): void {
    const institution: FormGroup = EducationComponent.getInstitutionForm();
    (<FormArray>this.edForm.get('institutions')).insert(0, institution);
  }

  onDeleteInstitution(institution: number) {
    (<FormArray>this.edForm.get('institutions')).removeAt(institution);
  }
}
