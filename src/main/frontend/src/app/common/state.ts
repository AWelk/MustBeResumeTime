export class State {
  readonly abbreviation: string;
  readonly name: string;

  constructor(abbreviation: string, name: string) {
    this.abbreviation = abbreviation;
    this.name = name;
  }
}
