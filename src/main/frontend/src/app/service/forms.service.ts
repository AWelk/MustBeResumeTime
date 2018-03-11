import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ContactFormService} from "./contact-form.service";
import {EdFormService} from "./ed-form.service";
import {MiscFormService} from "./misc-form.service";
import {WorkFormService} from "./work-form.service";
import {FormService} from "./FormService";

@Injectable()
export class FormsService {

  private _contactFormService: FormService;
  private _edFormService: FormService;
  private _miscFormService: FormService;
  private _workFormService: FormService;

  constructor(contactFormService: ContactFormService, edFormService: EdFormService,
              miscFormService: MiscFormService, workFormService: WorkFormService) {
    this._contactFormService = contactFormService;
    this._edFormService = edFormService;
    this._miscFormService = miscFormService;
    this._workFormService = workFormService;
  }

  private get contactForm(): FormGroup {
    return this._contactFormService.getForm();
  }

  private get workForm(): FormGroup {
    return this._workFormService.getForm();
  }

  private get edForm(): FormGroup {
    return this._edFormService.getForm();
  }

  private get miscForm(): FormGroup {
    return this._miscFormService.getForm();
  }

  saveForm(): void {
    // this.contactForm.
    console.log(this.contactForm.getRawValue());
    console.log(this.workForm.getRawValue());
    console.log(this.edForm.getRawValue());
    console.log(this.miscForm.getRawValue());
  }
}
