import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ContactFormService} from "./contact-form.service";
import {EdFormService} from "./ed-form.service";
import {MiscFormService} from "./misc-form.service";
import {WorkFormService} from "./work-form.service";

@Injectable()
export class FormsService {

  constructor(private _contactFormService: ContactFormService, private _edFormService: EdFormService, private _miscFormService: MiscFormService, private _workFormService: WorkFormService) {
  }

  get contactForm(): FormGroup {
    return this._contactFormService.getForm();
  }

  get workForm(): FormGroup {
    return this._workFormService.getForm();
  }

  get edForm(): FormGroup {
    return this._edFormService.getForm();
  }

  get miscForm(): FormGroup {
    return this._miscFormService.getForm();
  }
}
