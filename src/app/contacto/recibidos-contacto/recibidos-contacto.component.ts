import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { Usuario } from 'src/app/models/usuario';
import { ContactoService } from 'src/app/service/contacto.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-recibidos-contacto',
  templateUrl: './recibidos-contacto.component.html',
  styleUrls: ['./recibidos-contacto.component.css']
})
export class RecibidosContactoComponent implements OnInit{


  nombreUsuario!: string;
  usuario!: Usuario;
  idUser!: number;
  contactos: Contacto[] = [];
  roles!: string[] | null;
  isAdmin = false;
  idRemitente!: number;

  constructor(
    private contactoService: ContactoService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.cargarNotas();
    this.roles = this.tokenService.getAuthorities() ?? [];
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }



  cargarNotas() {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.usuarioService.detailName(this.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
        this.idUser = this.usuario.id;
        this.contactoService.contactoPorDestinatario(this.idUser).subscribe(
          data => {
            console.log(data)
            this.contactos = data;
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
}
