import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {State} from '../../common/state';
import {StaticDataService} from '../../service/static-data.service';
import {ContactFormService} from '../../service/contact-form.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit, OnDestroy {

  private _contactSub$: Subscription;
  private _stateSub$: Subscription;
  contactForm: FormGroup;
  states: State[];

  constructor(private _contactFormService: ContactFormService, private _dataService: StaticDataService) {
  }

  ngOnInit() {
    this._contactSub$ = this._contactFormService.getForm().subscribe((form: FormGroup) => this.contactForm = form);
    this._stateSub$ = this._dataService.states.subscribe(states => this.states = states);
  }

  ngOnDestroy(): void {
    this._contactSub$.unsubscribe();
    this._stateSub$.unsubscribe();
  }
}
