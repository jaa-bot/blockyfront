import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :increment, :decrement', [
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario: string | null = null;
  contenidoIndex = 0;
  contenidos: string[] = [
    '¿Qué es un blog de notas?',
    'Caracteristicas de un bloc de notas',
    'Contenido 3'
  ];

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      this.contenidos = [
        '¿Qué es un blog de notas?',
        'Caracteristicas de un bloc de notas',
        'Servicio de contacto'
      ];
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
      this.contenidos = [
        '¿Qué es un blog de notas?',
        'Caracteristicas de un bloc de notas',
        'Servicio de contacto',
        '¡Registrate!'
      ];
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
