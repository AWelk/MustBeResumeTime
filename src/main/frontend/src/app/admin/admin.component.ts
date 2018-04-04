import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormId} from '../common/form-id';
import {Subscription} from 'rxjs/Subscription';
import {ResumeService} from '../service/resume.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  forms: FormId[];

  formIdSubscription: Subscription;

  constructor(private _router: Router, private _resumeService: ResumeService) {
  }

  ngOnInit() {
    this.formIdSubscription = this.getAllForms();
  }

  ngOnDestroy(): void {
    this.formIdSubscription.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['resume']);
  }

  onLogout(): void {
    this._router.navigate(['']);
  }

  getAllForms(): Subscription {
    return this._resumeService.getAllForms()
      .subscribe(data => this.forms = data);
  }

  onEditForm(formId: FormId): void {
    console.log('Editing form ' + formId.name);
    this._resumeService.loadForm(formId).subscribe(() => this._router.navigate(['edit']));
  }

  onPrintForm(formId: FormId): void {
    console.log('Printing form ' + formId.name);
  }

  onDeleteForm(formId: FormId): void {
    this._resumeService.deleteForm(formId).subscribe(() => this.forms = this.forms.filter(form => form.id !== formId.id));
  }
}
