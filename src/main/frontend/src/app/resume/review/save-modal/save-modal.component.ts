import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {ResumeService} from '../../../service/resume.service';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {
  formName: string;

  constructor(private _resumeService: ResumeService, public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.formName = this._resumeService.getLoadedForm();
  }

  onSaveForm(): void {
    this._resumeService.saveForm(this.formName).subscribe(() => this.modalRef.hide());
  }

}
