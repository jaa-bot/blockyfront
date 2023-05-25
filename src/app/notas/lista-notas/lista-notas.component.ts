import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notas } from 'src/app/models/notas';
import { Usuario } from 'src/app/models/usuario';
import { NotasService } from 'src/app/service/notas.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {

  notas: Notas[] = [];
  nota!: Notas;
  notasUsuario: Notas[] = [];
  usuario!: Usuario;
  idUser!: number;
  nombreUsuario!: string;
  searchText!: string;
  filteredNotas: Notas[] = [];

  constructor(
    private notasService: NotasService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.cargarNotas();
  }

  borrarNota(id: number) {
    this.notasService.delete(id).subscribe(
      data => {
        this.toastr.success('Nota Eliminda', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarNotas();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  cargarNotas() {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.usuarioService.detailName(this.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
        this.idUser = this.usuario.id;
        this.notasService.listaNotasPorUsuario(this.idUser).subscribe(
          data => {
            this.notas = data;
            this.filterNotas(); // Filtrar las notas después de cargarlas
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  filterNotas() {
    this.filteredNotas = this.notas.filter(nota => nota.titulo.toLowerCase().includes(this.searchText.toLowerCase()));
    console.log(this.searchText)
  }
}
