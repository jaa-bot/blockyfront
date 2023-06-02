import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenWeb } from '../models/tokenWeb';

@Injectable({
    providedIn: 'root'
})
export class TokenWebService {

    usuarioURL = 'http://localhost:8090/token/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<TokenWeb[]> {
        return this.httpClient.get<TokenWeb[]>(this.usuarioURL + 'lista');
    }

    public detail(id: number): Observable<TokenWeb> {
        return this.httpClient.get<TokenWeb>(this.usuarioURL + `detailUser/${id}`);
    }

    public save(tokenWeb: TokenWeb): Observable<TokenWeb> {
        return this.httpClient.post<TokenWeb>(this.usuarioURL + 'nuevoToken', tokenWeb);
    }
}
