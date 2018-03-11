export class Position {

  constructor(private _position: String, private _startDate: String, private _endDate: String) {
  }

  get position(): String {
    return this._position;
  }

  set position(value: String) {
    this._position = value;
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
}
