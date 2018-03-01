import {Component, OnInit} from '@angular/core';
import {FormService} from "../../form.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormTab} from "../resume.component";
import {State} from "../../common/State";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit, FormTab {
  contactForm: FormGroup;
  states: State[];

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.contactForm = this.formService.getContactForm();

    if (!this.contactForm) {
      this.contactForm = new FormGroup({
        "firstName": new FormControl(null, Validators.required),
        "lastName": new FormControl(null, Validators.required),
        "zip": new FormControl(null),
        "city": new FormControl(null),
        "state": new FormControl("", Validators.required),
        "addLine1": new FormControl(null),
        "addLine2": new FormControl(null),
        "phone": new FormControl(null),
        "email": new FormControl(null, Validators.email)
      });
    }

    this.states = this.formService.getStates();
  }

  saveForm(): void {
    console.log(this.contactForm);
    this.formService.saveContactForm(this.contactForm);
  }
}
