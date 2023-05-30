import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8090/usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }

  public detail(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<any> {
    return this.httpClient.get<any>(this.usuarioURL + `detailnameUser/${nombre}`);
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL + 'auth/nuevo', usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `update/${id}`, usuario);
  }

  public updateAdmin(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `updateAdmin/${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `delete/${id}`);
  }
}
