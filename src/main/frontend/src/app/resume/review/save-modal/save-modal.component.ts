import {Component, OnInit} from '@angular/core';
import {FormsService} from "../../../service/forms.service";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {

  constructor(private _formsService: FormsService, public modalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  onSaveForm(): void {
    this._formsService.saveForm();
    this.modalRef.hide();
  }

}
