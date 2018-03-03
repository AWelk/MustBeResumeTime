import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {State} from "../common/State";

@Injectable()
export class FormService {
  private readonly _states = [
    new State('AL', 'Alabama'),
    new State('AK', 'Alaska'),
    new State('AZ', 'Arizona'),
    new State('AR', 'Arkansas'),
    new State('CA', 'California'),
    new State('CO', 'Colorado'),
    new State('CT', 'Connecticut'),
    new State('DE', 'Delaware'),
    new State('FL', 'Florida'),
    new State('GA', 'Georgia'),
    new State('HI', 'Hawaii'),
    new State('ID', 'Idaho'),
    new State('IL', 'Illinois'),
    new State('IN', 'Indiana'),
    new State('IA', 'Iowa'),
    new State('KS', 'Kansas'),
    new State('KY', 'Kentucky'),
    new State('LA', 'Louisiana'),
    new State('ME', 'Maine'),
    new State('MD', 'Maryland'),
    new State('MA', 'Massachusetts'),
    new State('MI', 'Michigan'),
    new State('MN', 'Minnesota'),
    new State('MS', 'Mississippi'),
    new State('MO', 'Missouri'),
    new State('MT', 'Montana'),
    new State('NE', 'Nebraska'),
    new State('NV', 'Nevada'),
    new State('NH', 'New Hampshire'),
    new State('NJ', 'New Jersey'),
    new State('NM', 'New Mexico'),
    new State('NY', 'New York'),
    new State('NC', 'North Carolina'),
    new State('ND', 'North Dakota'),
    new State('OH', 'Ohio'),
    new State('OK', 'Oklahoma'),
    new State('OR', 'Oregon'),
    new State('PA', 'Pennsylvania'),
    new State('RI', 'Rhode Island'),
    new State('SC', 'South Carolina'),
    new State('SD', 'South Dakota'),
    new State('TN', 'Tennessee'),
    new State('TX', 'Texas'),
    new State('UT', 'Utah'),
    new State('VT', 'Vermont'),
    new State('VA', 'Virginia'),
    new State('WA', 'Washington'),
    new State('WV', 'West Virginia'),
    new State('WI', 'Wisconsin'),
    new State('WY', 'Wyoming')
  ];
  private readonly _years: number[];

  constructor() {
    let tempYears: number[] = [];
    const currentYear: number = new Date().getFullYear();
    for (let i = currentYear; i > currentYear - 50; i--) {
      tempYears.push(i);
    }
    this._years = tempYears;
  }

  private _contactForm: FormGroup;

  get contactForm(): FormGroup {
    return this._contactForm;
  }

  set contactForm(formGroup: FormGroup) {
    this._contactForm = formGroup;
  }

  private _workForm: FormGroup;

  get workForm(): FormGroup {
    return this._workForm;
  }

  set workForm(formGroup: FormGroup) {
    this._workForm = formGroup;
  }

  private _edForm: FormGroup;

  get edForm(): FormGroup {
    return this._edForm;
  }

  set edForm(formGroup: FormGroup) {
    this._edForm = formGroup;
  }

  private _miscForm: FormGroup;

  get miscForm(): FormGroup {
    return this._miscForm;
  }

  set miscForm(value: FormGroup) {
    this._miscForm = value;
  }

  get states(): State[] {
    return this._states.slice();
  }

  get years(): number[] {
    return this._years.slice();
  }

}
