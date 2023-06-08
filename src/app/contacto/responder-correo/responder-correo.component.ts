import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { Usuario } from 'src/app/models/usuario';
import { ContactoService } from 'src/app/service/contacto.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-responder-correo',
  templateUrl: './responder-correo.component.html',
  styleUrls: ['./responder-correo.component.css']
})
export class ResponderCorreoComponent implements OnInit {

  contacto!: Contacto
  titulo!: string;
  descripcion!: string;
  idUser!: number;
  usuario!: Usuario;
  nombreUsuario = '';
  roles!: string[];
  isAdmin = false;
  respuesta!: string;
  contactoEnviar!: Contacto;

  constructor(
    private contactoService: ContactoService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contactoService.detail(id).subscribe(
      data => {
        console.log(data)
        this.contacto = data

      }, err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      });
      this.obtenerId();
  }

  onCreate(): void {

    this.contactoEnviar = new Contacto(this.titulo, this.descripcion, 1, this.contacto.remitente.id, false);

    this.contactoService.nuevo(this.contactoEnviar).subscribe(
      data => {
        this.onUpdate(data);
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

  
  onUpdate(data: any): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(" aqui taaaaa " + data);
    this.contacto.responder = true;
    this.contactoService.update(id, data).subscribe(
      data => {

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

