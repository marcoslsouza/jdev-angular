import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private endPointBase: string  = '/spring-boot'

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.endPointBase}/usuario/`);
  }
}
