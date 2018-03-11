import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ContactFormService} from "./contact-form.service";
import {EdFormService} from "./ed-form.service";
import {MiscFormService} from "./misc-form.service";
import {WorkFormService} from "./work-form.service";
import {FormService} from "./FormService";
import {ContactForm} from "../common/contact-form";
import {WorkForm} from "../common/work-form";
import {EdForm} from "../common/ed-form";
import {MiscForm} from "../common/misc-form";
import {ResumeForm} from "../common/resume-form";

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
    let contactForm: ContactForm = <ContactForm>this.contactForm.getRawValue();
    let workForm: WorkForm = <WorkForm>this.workForm.getRawValue();
    let edForm: EdForm = <EdForm>this.edForm.getRawValue();
    let miscForm: MiscForm = <MiscForm>this.miscForm.getRawValue();

    let resumeForm: ResumeForm = new ResumeForm(contactForm, workForm, edForm, miscForm);
    console.log(resumeForm);
  }
}
