import {Position} from "./position";

export class Workplace {

  constructor(private _employerName: String, private _city: String, private _state: String, private _positions: Position[],
              private _description: String, private _responsibilities: String[]) {
  }


  get employerName(): String {
    return this._employerName;
  }

  set employerName(value: String) {
    this._employerName = value;
  }

  get city(): String {
    return this._city;
  }

  set city(value: String) {
    this._city = value;
  }

  get state(): String {
    return this._state;
  }

  set state(value: String) {
    this._state = value;
  }

  get positions(): Position[] {
    return this._positions;
  }

  set positions(value: Position[]) {
    this._positions = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get responsibilities(): String[] {
    return this._responsibilities;
  }

  set responsibilities(value: String[]) {
    this._responsibilities = value;
  }
}
