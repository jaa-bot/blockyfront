import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { notas } from 'src/app/models/notas';
import { usuario } from 'src/app/models/usuario';
import { NotasService } from 'src/app/service/notas.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit
{

  notas!: notas[];
  nota!: notas;
  notasUsuario!: notas[];
  usuario!: usuario;
  idUser!: number;
  nombreUsuario!: string;

  constructor(
    private notasService: NotasService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void
  {
    this.cargarNotas();

  }
  borrarNota(id: number)
  {
    this.notasService.delete(id).subscribe(
      data =>
      {
        this.toastr.success('Nota Eliminda', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarNotas();
      },
      err =>
      {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  cargarNotas()
  {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.usuarioService.detailName(this.nombreUsuario).subscribe(
      data =>
      {
        this.usuario = data;
        this.idUser = this.usuario.id;
        this.notasService.listaNotasPorUsuario(this.idUser).subscribe(
          data =>
          {
            this.notas = data;
          },
          err =>
          {
            console.log(err);
          }
        );
      },
      err =>
      {
        console.log(err);
      }
    );
  }
}
