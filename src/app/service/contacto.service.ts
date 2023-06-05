import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contacto } from "../models/contacto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactoService {

    notasURL = 'http://localhost:8090/contacto/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Contacto[]>
    {
      return this.httpClient.get<Contacto[]>(this.notasURL + 'listaContacto');
    }
  
    public contactoPorRemitente(id: number): Observable<Contacto[]>
    {
      return this.httpClient.get<Contacto[]>(this.notasURL + `contactoPorRemitente/${id}`);
    }

    public contactoPorDestinatario(id: number): Observable<Contacto[]>
    {
      return this.httpClient.get<Contacto[]>(this.notasURL + `contactoPorDestinatario/${id}`);
    }
  
    public nuevo(notas: Contacto): Observable<Contacto>
    {
      return this.httpClient.post<Contacto>(this.notasURL + 'nuevoContacto', notas);
    }

}