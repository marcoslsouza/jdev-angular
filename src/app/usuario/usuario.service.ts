import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuarios/usuario';

@Injectable()
export class UsuarioService {

  apiUrl : string = environment.urlBaseEndPoint;

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/`);
  }

  public getUsuarioPorNome(nome: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/por-nome/`+nome);
  }

  public getUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/`+id);
  }

  public excluir(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/usuario/`+id);
  }
}
