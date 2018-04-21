export class FormId {
  public createdOn: number;
  public editedOn: number;

  constructor(public id: string, public name: string, createdOn: number, editedOn: number) {
    this.createdOn = createdOn;
    this.editedOn = editedOn;
  }
}
