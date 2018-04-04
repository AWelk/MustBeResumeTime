import {Injectable} from '@angular/core';
import {State} from '../common/state';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StaticDataService {
  constructor(private _http: HttpClient) {
    this._http.get<State[]>('api/states').subscribe(input => this._states.next(input));
  }

  private _states: BehaviorSubject<State[]> = new BehaviorSubject<State[]>([]);

  get states(): Observable<State[]> {
    return this._states.asObservable();
  }

  private _years: number[];

  get years(): number[] {
    if (!this._years) {
      const tempYears: number[] = [];
      const currentYear: number = new Date().getFullYear();
      for (let i = currentYear; i > currentYear - 50; i--) {
        tempYears.push(i);
      }
      this._years = tempYears;
    }
    return this._years.slice();
  }
}
