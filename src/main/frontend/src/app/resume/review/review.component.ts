import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormTab} from "../resume.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, FormTab {
  modalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  ngOnInit() {
  }

  saveForm(): void {
    return;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }
}
