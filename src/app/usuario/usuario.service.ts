import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  apiUrl : string = environment.urlBaseEndPoint;

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/`);
  }
}
