export class FormId {
  public createdOn: Date;
  public editedOn: Date;

  constructor(public id: string, public name: string, createdOn: number, editedOn: number) {
    this.createdOn = new Date(createdOn);
    this.editedOn = new Date(editedOn);
  }
}
