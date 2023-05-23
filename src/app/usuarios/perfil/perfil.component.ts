import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { usuario } from 'src/app/models/usuario';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  producto!: usuario;
  nombreUsuario!: string;

  constructor(
    private productoService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.productoService.detailName(this.nombreUsuario).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
}
