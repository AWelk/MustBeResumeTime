import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {SaveModalComponent} from './save-modal/save-modal.component';
import {ResumeService} from '../../service/resume.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  private _printSub$: Subscription;
  @ViewChild('downloadZipLink')
  private downloadZipLink: ElementRef;

  constructor(private _modalService: BsModalService, private _resumeService: ResumeService) {
  }

  ngOnInit() {
  }

  openSaveModal(): void {
    this._modalService.show(SaveModalComponent);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this._modalService.show(template);
  }

  printResume(): void {
    const name: string = this._resumeService.getResumeSaveName();
    this._printSub$ = this._resumeService.printForm().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = this.downloadZipLink.nativeElement;
      link.href = url;
      link.download = name + '.docx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

  ngOnDestroy(): void {
    if (this._printSub$) {
      this._printSub$.unsubscribe();
    }
  }
}
