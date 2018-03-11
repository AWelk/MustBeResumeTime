import {Institution} from "./institution";

export class EdForm {

  constructor(private _institutions: Institution[]) {
  }

  get institutions(): Institution[] {
    return this._institutions;
  }

  set institutions(value: Institution[]) {
    this._institutions = value;
  }
}
