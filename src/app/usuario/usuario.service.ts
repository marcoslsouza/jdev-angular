import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private apiUrl: string = AppConstants.baseUrl;

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl);
  }
}
