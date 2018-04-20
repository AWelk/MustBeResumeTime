import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ContactForm} from '../common/contact-form';

@Injectable()
export class ContactFormService {

  private _contactForm: FormGroup;
  private _formSub$: BehaviorSubject<FormGroup>;

  constructor() {
    this._contactForm = ContactFormService.initContactForm();
    this._formSub$ = new BehaviorSubject<FormGroup>(this._contactForm);
  }

  private static initContactForm(contactForm?: ContactForm): FormGroup {
    const form: FormGroup = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'zip': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl('', Validators.required),
      'addLine1': new FormControl(null),
      'addLine2': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null, Validators.email)
    });
    if (contactForm) {
      form.setValue(contactForm);
    }
    return form;
  }

  getForm(): Observable<FormGroup> {
    return this._formSub$.asObservable();
  }

  resetForm(): void {
    this._contactForm = ContactFormService.initContactForm();
    this._formSub$.next(this._contactForm);
  }

  loadForm(contactForm: ContactForm): void {
    const form: FormGroup = ContactFormService.initContactForm();
    form.setValue(contactForm);
    this._contactForm = form;
    this._formSub$.next(this._contactForm);
  }
}
