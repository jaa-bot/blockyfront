import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario: string | null = null;
  contenidoIndex = 0;
  contenidos: string[] = [
    '¿Qué es un blog de notas?',
    'Contenido 2',
    'Contenido 3'
  ];

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  mostrarContenidoAnterior() {
    if (this.contenidoIndex > 0) {
      this.contenidoIndex--;
    }
  }

  mostrarSiguienteContenido() {
    if (this.contenidoIndex < this.contenidos.length - 1) {
      this.contenidoIndex++;
    }
  }
}
