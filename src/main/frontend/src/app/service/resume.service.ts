import {Injectable} from '@angular/core';
import {MiscFormService} from './misc-form.service';
import {WorkFormService} from './work-form.service';
import {EdFormService} from './ed-form.service';
import {FormsService} from './forms.service';
import {ContactFormService} from './contact-form.service';
import {FormGroup} from '@angular/forms';
import {WorkForm} from '../common/work-form';
import {MiscForm} from '../common/misc-form';
import {EdForm} from '../common/ed-form';
import {FormDetail} from '../common/form-detail';
import {ContactForm} from '../common/contact-form';
import {Observable} from 'rxjs/Observable';
import {FormId} from '../common/form-id';

@Injectable()
export class ResumeService {

  private _contactForm: FormGroup;
  private _edForm: FormGroup;
  private _workForm: FormGroup;
  private _miscForm: FormGroup;

  private _loadedForm: string;

  constructor(private _contactFormService: ContactFormService, private _edFormService: EdFormService,
              private _workFormService: WorkFormService, private _miscFormService: MiscFormService,
              private _formsService: FormsService) {
    this._contactFormService.getForm().subscribe(form => this._contactForm = form);
    this._edFormService.getForm().subscribe(form => this._edForm = form);
    this._workFormService.getForm().subscribe(form => this._workForm = form);
    this._miscFormService.getForm().subscribe(form => this._miscForm = form);
  }

  saveForm(formName: string): Observable<{}> {
    const contactForm: ContactForm = <ContactForm>this._contactForm.value;
    const edForm: EdForm = <EdForm>this._edForm.value;
    const workForm: WorkForm = <WorkForm>this._workForm.value;
    const miscForm: MiscForm = <MiscForm>this._miscForm.value;

    const date: Date = new Date();
    const formDetail: FormDetail = new FormDetail(formName, date, date, contactForm, workForm, edForm, miscForm);
    return this._formsService.saveForm(formDetail).map(() => {
      this.resetForms();
      return true;
    });
  }

  getAllForms(): Observable<FormId[]> {
    return this._formsService.getAllForms();
  }

  deleteForm(formId: FormId): Observable<{}> {
    return this._formsService.deleteForm(formId);
  }

  loadForm(formId: FormId): Observable<{}> {
    this._loadedForm = formId.name;
    return this._formsService.loadForm(formId).map(resume => {
      this._contactFormService.loadForm(resume.contactForm);
      this._workFormService.loadForm(resume.workForm);
      this._edFormService.loadForm(resume.edForm);
      this._miscFormService.loadForm(resume.miscForm);
      return true;
    });
  }

  resetForms(): void {
    this._contactFormService.resetForm();
    this._edFormService.resetForm();
    this._workFormService.resetForm();
    this._miscFormService.resetForm();
    this._loadedForm = '';
  }

  getLoadedForm(): string {
    return this._loadedForm;
  }

}
