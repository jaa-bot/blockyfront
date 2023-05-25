import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService
{

  notasURL = 'http://localhost:8090/notas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Notas[]>
  {
    return this.httpClient.get<Notas[]>(this.notasURL + 'listaNotas');
  }

  public listaNotasPorUsuario(id: number): Observable<Notas[]>
  {
    return this.httpClient.get<Notas[]>(this.notasURL + `notasPorUsuario/${id}`);
  }

  public nuevo(notas: Notas): Observable<Notas>
  {
    return this.httpClient.post<Notas>(this.notasURL + 'nuevoNotas', notas);
  }

  public delete(id: number): Observable<any>
  {
    return this.httpClient.delete<any>(this.notasURL + `deleteNotas/${id}`);
  }

  public detailName(nombre: number): Observable<Notas[]>
  {
    return this.httpClient.get<Notas[]>(this.notasURL + `detailnameNotas/${nombre}`);
  }

  public detail(id: number): Observable<Notas>
  {
    return this.httpClient.get<Notas>(this.notasURL + `detailNotas/${id}`);
  }

  public update(id: number, nota: Notas): Observable<Notas>
  {
    return this.httpClient.put<Notas>(this.notasURL + `updateNotas/${id}`, nota);
  }
}
