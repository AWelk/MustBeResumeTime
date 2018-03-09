import {FormGroup} from "@angular/forms";

export interface FormService {

  getForm(): FormGroup;

  resetForm(): void;
}
