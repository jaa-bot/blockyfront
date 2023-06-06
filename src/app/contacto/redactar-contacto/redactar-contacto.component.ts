import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { Usuario } from 'src/app/models/usuario';
import { ContactoService } from 'src/app/service/contacto.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-redactar-contacto',
  templateUrl: './redactar-contacto.component.html',
  styleUrls: ['./redactar-contacto.component.css']
})
export class RedactarContactoComponent implements OnInit {

  titulo = '';
  descripcion = '';
  idUser! : number;
  usuario! : Usuario;
  nombreUsuario = '';
  roles!: string[];
  isAdmin = false;

  constructor(private contactoService: ContactoService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    //this.obtenerId();

    this.roles = this.tokenService.getAuthorities() ?? [];
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onCreate(): void {

    let contacto;

    if(this.isAdmin == true){
      contacto = new Contacto(this.titulo, this.descripcion, 1, this.idUser);
    }
    else{
      contacto = new Contacto(this.titulo, this.descripcion, this.idUser, 1);
    }

    this.contactoService.nuevo(contacto).subscribe(
      data => {
        this.toastr.success('Correo Enviado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/recibidos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
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
