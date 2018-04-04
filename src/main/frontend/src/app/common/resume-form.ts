import {ContactForm} from './contact-form';
import {WorkForm} from './work-form';
import {EdForm} from './ed-form';
import {MiscForm} from './misc-form';

export class ResumeForm {

  constructor(public contactForm: ContactForm, public workForm: WorkForm,
              public edForm: EdForm, public miscForm: MiscForm) {
  }
}
