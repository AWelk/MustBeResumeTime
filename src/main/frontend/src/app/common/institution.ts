export class Institution {

  constructor(private _institution: String, private _city: String, private _state: String, private _degree: String,
              private _startDate: String, private _endDate: String, private _achievements: String) {
  }

  get institution(): String {
    return this._institution;
  }

  set institution(value: String) {
    this._institution = value;
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

  get degree(): String {
    return this._degree;
  }

  set degree(value: String) {
    this._degree = value;
  }

  get startDate(): String {
    return this._startDate;
  }

  set startDate(value: String) {
    this._startDate = value;
  }

  get endDate(): String {
    return this._endDate;
  }

  set endDate(value: String) {
    this._endDate = value;
  }

  get achievements(): String {
    return this._achievements;
  }

  set achievements(value: String) {
    this._achievements = value;
  }
}
