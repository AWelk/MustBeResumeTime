export class MiscForm {

  constructor(private _skills: String[], private _expertise: String[]) {
  }

  get skills(): String[] {
    return this._skills;
  }

  set skills(value: String[]) {
    this._skills = value;
  }

  get expertise(): String[] {
    return this._expertise;
  }

  set expertise(value: String[]) {
    this._expertise = value;
  }
}
