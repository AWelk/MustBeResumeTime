import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {State} from "../../common/State";
import {FormService} from "../../service/form.service";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit, FormTab {
  workForm: FormGroup;
  states: State[];
  years: number[];

  constructor(private formService: FormService) {
  }

  private static getWorkplaceForm(): FormGroup {
    return new FormGroup({
      "employerName": new FormControl(null),
      "city": new FormControl(null),
      "state": new FormControl(''),
      "positions": new FormArray([WorkExperienceComponent.getPositionForm()]),
      "description": new FormControl(null),
      "responsibilities": new FormArray([WorkExperienceComponent.getResponsibilityForm()])
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

  saveForm(): void {
    console.log(this.workForm);
    this.formService.saveWorkForm(this.workForm);
  }

  onAddPosition(workplace: number): void {
    const position: AbstractControl = WorkExperienceComponent.getPositionForm();
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('positions')).at(0).disable();
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('positions')).insert(0, position);
  }

  onDeletePosition(position: number, workplace: number): void {
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('positions')).removeAt(position);
  }

  onAddResponsibility(workplace: number): void {
    const responsibility: AbstractControl = WorkExperienceComponent.getResponsibilityForm();
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('responsibilities')).at(0).disable();
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('responsibilities')).insert(0, responsibility);
  }

  onDeleteResponsibility(responsibility: number, workplace: number): void {
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('responsibilities')).removeAt(responsibility);
  }

  ngOnInit() {
    this.workForm = this.formService.getWorkForm();

    if (!this.workForm) {

      this.workForm = new FormGroup({
        "workplaces": new FormArray([WorkExperienceComponent.getWorkplaceForm()])
      });
    }

    this.states = this.formService.getStates();
    this.years = this.formService.getYears();
  }

  onDeleteWorkplace(workplace: number) {
    (<FormArray>this.workForm.get('workplaces')).removeAt(workplace);
  }

  onAddWorkPlace(): void {
    const workplace: FormGroup = WorkExperienceComponent.getWorkplaceForm();
    (<FormArray>this.workForm.get('workplaces')).insert(0, workplace);
  }
}
