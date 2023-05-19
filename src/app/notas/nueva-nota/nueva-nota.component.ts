import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { notas } from 'src/app/models/notas';
import { usuario } from 'src/app/models/usuario';
import { NotasService } from 'src/app/service/notas.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {

  titulo = '';
  texto = '';
  idUser! : number;
  usuario! : usuario;
  nombreUsuario = '';

  constructor(
    private notasService: NotasService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.obtenerId();
  }



  onCreate(): void {
    
    const nota = new notas(6, this.titulo,this.texto);
    this.notasService.nuevo(nota).subscribe(
      data => {
        this.toastr.success('Nota Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaNotas']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

  obtenerId(): any {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.usuarioService.detailName(this.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
        this.idUser = this.usuario.id;
      },
      err => {
        console.log(err);
      }
    );
  }
}
