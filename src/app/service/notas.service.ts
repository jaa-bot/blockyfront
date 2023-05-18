import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { notas } from '../models/notas';

@Injectable({
    providedIn: 'root'
})
export class NotasService {

    notasURL = 'http://localhost:8090/notas/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<notas[]> {
        return this.httpClient.get<notas[]>(this.notasURL + 'listaNotas');
    }

    public nuevo(notas: notas): Observable<notas> {
        return this.httpClient.post<notas>(this.notasURL + 'nuevoNotas', notas);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.notasURL + `deleteNotas/${id}`);
    }

    public detailName(nombre: number): Observable<notas[]> {
        return this.httpClient.get<notas[]>(this.notasURL + `detailnameNotas/${nombre}`);
    }

    public detail(id: number): Observable<notas> {
        return this.httpClient.get<notas>(this.notasURL + `detailNotas/${id}`);
    }

    public update(id: number, producto: notas): Observable<any> {
        return this.httpClient.put<any>(this.notasURL + `updateNotas/${id}`, producto);
      }
}