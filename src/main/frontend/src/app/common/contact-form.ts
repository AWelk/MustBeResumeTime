export class ContactForm {

  constructor(private _firstName: String, private _lastName: String, private _addLine1: String,
              private _addLine2: String, private _city: String, private _state: String, private _zip: String,
              private _phone: String, private _email: String) {
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  set lastName(value: String) {
    this._lastName = value;
  }

  set addLine1(value: String) {
    this._addLine1 = value;
  }

  set addLine2(value: String) {
    this._addLine2 = value;
  }

  set city(value: String) {
    this._city = value;
  }

  set state(value: String) {
    this._state = value;
  }

  set zip(value: String) {
    this._zip = value;
  }

  set phone(value: String) {
    this._phone = value;
  }

  set email(value: String) {
    this._email = value;
  }
}
