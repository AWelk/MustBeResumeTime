import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {SaveModalComponent} from "./save-modal/save-modal.component";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {
  }

  ngOnInit() {
  }

  openSaveModal(): void {
    this._modalService.show(SaveModalComponent);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this._modalService.show(template);
  }
}
