import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {State} from "../../common/State";
import {FormService} from "../../form.service";

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

  ngOnInit() {
    this.workForm = this.formService.getWorkForm();

    if (!this.workForm) {

      this.workForm = new FormGroup({
        "workplaces": new FormArray([
          new FormGroup({
            "employerName": new FormControl(null),
            "city": new FormControl(null),
            "state": new FormControl(''),
            "positions": new FormArray([
              new FormGroup({
                "position": new FormControl(null),
                "startDate": new FormControl(""),
                "endDate": new FormControl("")
              })
            ]),
            "description": new FormControl(null),
            "responsibilities": new FormArray([
              new FormControl(null)
            ])
          })
        ])
      });
    }

    this.states = this.formService.getStates();
    this.years = this.formService.getYears();
  }

  saveForm(): void {
    console.log(this.workForm);
    this.formService.saveWorkForm(this.workForm);
  }

  onAddPosition(workplace: number): void {
    const position: FormGroup = new FormGroup({
      "position": new FormControl(null),
      "startDate": new FormControl(""),
      "endDate": new FormControl('')
    });
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('positions')).insert(0, position);
  }

  onDeletePosition(position: number, workplace: number): void {
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('positions')).removeAt(position);
  }

  onAddResponsibility(workplace: number): void {
    const responsibility: FormControl = new FormControl(null);
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('responsibilities')).insert(0, responsibility);
  }

  onDeleteResponsibility(responsibility: number, workplace: number): void {
    (<FormArray>(<FormArray>this.workForm.get("workplaces")).at(workplace).get('responsibilities')).removeAt(responsibility);
  }

  onAddWorkPlace(): void {
    const workplace: FormGroup = new FormGroup({
      "employerName": new FormControl(null),
      "city": new FormControl(null),
      "state": new FormControl(''),
      "positions": new FormArray([
        new FormGroup({
          "position": new FormControl(null),
          "startDate": new FormControl(""),
          "endDate": new FormControl('')
        })
      ]),
      "description": new FormControl(null),
      "responsibilities": new FormArray([
        new FormControl(null)
      ])
    });
    (<FormArray>this.workForm.get('workplaces')).insert(0, workplace);
  }

  onDeleteWorkplace(workplace: number) {
    (<FormArray>this.workForm.get('workplaces')).removeAt(workplace);
  }
}
