import {Injectable} from '@angular/core';
import {FormId} from '../common/form-id';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormDetail} from '../common/form-detail';

@Injectable()
export class FormsService {

  constructor(private http: HttpClient) {
  }

  getAllForms(): Observable<FormId[]> {
    return this.http.get<FormId[]>('/api/resumes');
  }

  deleteForm(formId: FormId): Observable<{}> {
    return this.http.delete<boolean>('/api/resumes/' + formId.id);
  }

  saveForm(formDetail: FormDetail): Observable<{}> {
    return this.http.post('/api/resumes', formDetail);
  }

  loadForm(formId: FormId): Observable<FormDetail> {
    return this.http.get<FormDetail>('/api/resumes/' + formId.id);
  }

  printForm(formDetail: FormDetail): Observable<Blob> {
    return this.http.post<Blob>('/api/resumes/print', formDetail, {responseType: 'blob' as 'json'});
  }

  printFormFromId(formId: FormId): Observable<Blob> {
    return this.http.get<Blob>('/api/resumes/print/' + formId.id, {responseType: 'blob' as 'json'});
  }
}
