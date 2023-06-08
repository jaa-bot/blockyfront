import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Log } from "../models/log";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LogService {

    notasURL = 'http://localhost:8090/log/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Log[]>
    {
      return this.httpClient.get<Log[]>(this.notasURL + 'listaLog');
    }

    public delete(id: number): Observable<any>
    {
      return this.httpClient.delete<any>(this.notasURL + `deleteLog/${id}`);
    }
}