import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  productoURL = 'http://localhost:8090/usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<usuario[]> {
    return this.httpClient.get<usuario[]>(this.productoURL + 'lista');
  }

  public detail(id: number): Observable<usuario> {
    return this.httpClient.get<usuario>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<any> {
    return this.httpClient.get<any>(this.productoURL + `detailnameUser/${nombre}`);
  }

  public save(producto: usuario): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'auth/nuevo', producto);
  }

  public update(id: number, producto: usuario): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}
