import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MiscForm} from '../common/misc-form';

@Injectable()
export class MiscFormService {

  private _miscForm: FormGroup;
  private _miscSub$: BehaviorSubject<FormGroup>;

  constructor() {
    this._miscForm = MiscFormService.initMiscForm();
    this._miscSub$ = new BehaviorSubject<FormGroup>(this._miscForm);
  }

  private static initMiscForm(miscForm?: MiscForm): FormGroup {
    if (miscForm) {
      return new FormGroup({
        'skills': MiscFormService.getSkillsForm(miscForm.skills),
        'expertise': MiscFormService.getExpertisesForm(miscForm.expertise)
      });
    } else {
      return new FormGroup({
        'skills': MiscFormService.getSkillsForm(),
        'expertise': MiscFormService.getExpertisesForm()
      });
    }
  }

  private static getSkillsForm(skills?: String[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (skills) {
      skills.forEach(skill => list.push(this.getSkillForm(skill)));
    } else {
      list.push(this.getSkillForm());
    }
    return list;
  }

  private static getSkillForm(skill?: String): AbstractControl {
    if (skill) {
      return new FormControl(skill);
    } else {
      return new FormControl(null);
    }
  }

  private static getExpertisesForm(expertieses?: String[]): FormArray {
    const list: FormArray = new FormArray([]);
    if (expertieses) {
      expertieses.forEach(expertise => list.push(this.getExpertiseForm(expertise)));
    } else {
      list.push(this.getExpertiseForm());
    }
    return list;
  }

  private static getExpertiseForm(expertise?: String): AbstractControl {
    if (expertise) {
      return new FormControl(expertise);
    } else {
      return new FormControl(null);
    }
  }

  addSkill(): void {
    const skill: AbstractControl = MiscFormService.getSkillForm();
    (<FormArray>this._miscForm.get('skills')).insert(0, skill);
    this._miscSub$.next(this._miscForm);
  }

  deleteSkill(skill: number) {
    (<FormArray>this._miscForm.get('skills')).removeAt(skill);
    this._miscSub$.next(this._miscForm);
  }

  addExpertise(): void {
    const skill: AbstractControl = MiscFormService.getSkillForm();
    (<FormArray>this._miscForm.get('expertise')).insert(0, skill);
    this._miscSub$.next(this._miscForm);
  }

  deleteExpertise(expertise: number) {
    (<FormArray>this._miscForm.get('expertise')).removeAt(expertise);
    this._miscSub$.next(this._miscForm);
  }

  getForm(): Observable<FormGroup> {
    return this._miscSub$.asObservable();
  }

  resetForm(): void {
    this._miscForm = MiscFormService.initMiscForm();
    this._miscSub$.next(this._miscForm);
  }

  loadForm(miscForm: MiscForm) {
    this._miscForm = MiscFormService.initMiscForm(miscForm);
    this._miscSub$.next(this._miscForm);
  }
}
