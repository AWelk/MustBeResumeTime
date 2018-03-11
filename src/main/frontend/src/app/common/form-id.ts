export class FormId {

  constructor(private _id: number, private _name: String, private _savedDate: String) {
  }

  get id(): number {
    return this._id;
  }

  get name(): String {
    return this._name;
  }

  get savedDate(): String {
    return this._savedDate;
  }
}
