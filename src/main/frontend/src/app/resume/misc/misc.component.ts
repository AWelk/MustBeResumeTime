import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MiscFormService} from '../../service/misc-form.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit, OnDestroy {

  private _miscSub$: Subscription;
  miscForm: FormGroup;

  constructor(private _miscFormService: MiscFormService) {
  }

  get skillsArray(): FormArray {
    return <FormArray>this.miscForm.get('skills');
  }

  get expertiesArray(): FormArray {
    return <FormArray>this.miscForm.get('expertise');
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

  ngOnInit() {
    this._miscSub$ = this._miscFormService.getForm().subscribe(form => this.miscForm = form);
  }

  ngOnDestroy(): void {
    this._miscSub$.unsubscribe();
  }
}
