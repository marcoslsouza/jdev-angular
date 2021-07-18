import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

import { FormLogin } from './form-login.model';

@Injectable()
export class FormLoginService {

  constructor(private http: HttpClient) { }

  public login(formLogin: FormLogin): Observable<any> {
    //console.info(JSON.stringify(formLogin));
    // Converter em JSON "JSON.stringify"
    return this.http.post(AppConstants.baseLogin, JSON.stringify(formLogin));
  }
}
