import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenWeb } from '../models/tokenWeb';

@Injectable({
    providedIn: 'root'
})
export class TokenWebService {

    usuarioURL = 'http://localhost:8090/token/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<PushSubscription[]> {
        return this.httpClient.get<PushSubscription[]>(this.usuarioURL + 'lista');
    }

    public detail(id: number): Observable<PushSubscription> {
        return this.httpClient.get<PushSubscription>(this.usuarioURL + `detailUser/${id}`);
    }

    public save(usuario: PushSubscription): Observable<any> {
        return this.httpClient.post<any>(this.usuarioURL + 'nuevoToken', usuario);
    }

}