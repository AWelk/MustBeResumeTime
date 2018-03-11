import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormsService} from "../service/forms.service";
import {FormId} from "../common/form-id";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private formService: FormsService) {
  }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigate(['resume']);
  }

  onLogout(): void {
    this.router.navigate(['']);
  }

  getAllForms(): FormId[] {
    return this.formService.getAllForms();
  }

  onEditForm(formId: FormId): void {
    console.log("Editing form " + formId.name);
  }

  onPrintForm(formId: FormId): void {
    console.log("Printing form " + formId.name);
  }
}
