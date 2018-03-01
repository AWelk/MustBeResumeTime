import {Component, OnInit} from '@angular/core';
import {FormTab} from "../resume.component";
import {FormService} from "../../form.service";
import {State} from "../../common/State";
import {FormGroup} from "@angular/forms";

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

  ngOnInit() {
    this.edForm = this.formService.getEdForm();

    if (!this.edForm) {

      // this.edForm = new FormGroup({
      //   "institutions": new FormArray([
      //     new FormGroup({
      //       "institution": new FormControl(null),
      //       "city": new FormControl(null),
      //       "state": new FormControl(""),
      //       "degree": new FormControl(""),
      //       "startDate": new FormControl(""),
      //       "endDate": new FormControl(""),13
      //       "acievments": new FormControl(null)
      //     })
      //   ])
      // });
    }

    this.states = this.formService.getStates();
    this.years = this.formService.getYears();
  }

  saveForm(): void {
  }
}
