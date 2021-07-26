import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FormLogin } from './form-login.model';

@Injectable()
export class FormLoginService {

  apiUrl : string = environment.urlBaseEndPoint;

  constructor(private http: HttpClient) { }

  public login(formLogin: FormLogin): Observable<any> {
    //console.info(JSON.stringify(formLogin));
    // Converter em JSON "JSON.stringify"
    return this.http.post(`${this.apiUrl}/login`, JSON.stringify(formLogin));
  }
}
