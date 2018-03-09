import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "./FormService";

@Injectable()
export class ContactFormService implements FormService {

  private _contactForm: FormGroup;

  constructor() {
    this._contactForm = ContactFormService.initContactForm();
  }

  private static initContactForm(): FormGroup {
    return new FormGroup({
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

  getForm(): FormGroup {
    return this._contactForm;
  }

  resetForm(): void {
    this._contactForm = ContactFormService.initContactForm();
  }
}
