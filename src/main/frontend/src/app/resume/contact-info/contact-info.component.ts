import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {State} from "../../common/State";
import {StaticDataService} from "../../service/static-data.service";
import {ContactFormService} from "../../service/contact-form.service";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactForm: FormGroup;
  states: State[];

  constructor(private _contactFormService: ContactFormService, private _dataService: StaticDataService) {
  }

  ngOnInit() {
    this.contactForm = this._contactFormService.getForm();
    this.states = this._dataService.states;
  }
}
