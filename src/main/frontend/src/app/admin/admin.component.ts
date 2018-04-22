import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  isDownloading: FormId;
  private _printSub$: Subscription;
  @ViewChild('downloadZipLink')
  private downloadZipLink: ElementRef;


  constructor(private _router: Router, private _resumeService: ResumeService) {
  }

  ngOnInit() {
    this.formIdSubscription = this.getAllForms();
    this.isDownloading = null;
  }

  ngOnDestroy(): void {
    this.formIdSubscription.unsubscribe();
    if (this._printSub$) {
      this._printSub$.unsubscribe();
    }
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
    const date: Date = new Date();
    const name = formId.name + ' - ' + date.toLocaleString();
    this._printSub$ = this._resumeService.printFormFromId(formId).subscribe(blob => {
      this.isDownloading = null;
      const url = window.URL.createObjectURL(blob);
      const link = this.downloadZipLink.nativeElement;
      link.href = url;
      link.download = name + '.docx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
    this.isDownloading = formId;
  }

  onDeleteForm(formId: FormId): void {
    this._resumeService.deleteForm(formId).subscribe(() => this.forms = this.forms.filter(form => form.id !== formId.id));
  }

  isDownloadingForm(formId: FormId): boolean {

  }
}
