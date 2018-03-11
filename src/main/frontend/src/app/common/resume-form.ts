import {ContactForm} from './contact-form';
import {WorkForm} from './work-form';
import {EdForm} from './ed-form';
import {MiscForm} from './misc-form';

export class ResumeForm {

  constructor(private _contactForm: ContactForm, private _workForm: WorkForm,
              private _edForm: EdForm, private _miscForm: MiscForm) {
  }

  get contactForm(): ContactForm {
    return this._contactForm;
  }

  set contactForm(value: ContactForm) {
    this._contactForm = value;
  }

  get workForm(): WorkForm {
    return this._workForm;
  }

  set workForm(value: WorkForm) {
    this._workForm = value;
  }

  get edForm(): EdForm {
    return this._edForm;
  }

  set edForm(value: EdForm) {
    this._edForm = value;
  }

  get miscForm(): MiscForm {
    return this._miscForm;
  }

  set miscForm(value: MiscForm) {
    this._miscForm = value;
  }
}
