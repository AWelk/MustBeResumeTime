import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MiscFormService} from '../../service/misc-form.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  miscForm: FormGroup;

  constructor(private _miscFormService: MiscFormService) {
  }

  ngOnInit() {
    this.miscForm = this._miscFormService.getForm();
  }

  onAddSkill(): void {
    this._miscFormService.addSkill();
  }

  onDeleteSkill(skill: number) {
    this._miscFormService.deleteSkill(skill);
  }

  onAddExpertise(): void {
    this._miscFormService.addExpertise();
  }

  onDeleteExpertise(expertise: number) {
    this._miscFormService.deleteExpertise(expertise);
  }
}
