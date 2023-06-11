import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { Usuario } from 'src/app/models/usuario';
import { ContactoService } from 'src/app/service/contacto.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-enviados-contacto',
  templateUrl: './enviados-contacto.component.html',
  styleUrls: ['./enviados-contacto.component.css']
})
export class EnviadosContactoComponent implements OnInit{


  nombreUsuario!: string;
  usuario!: Usuario;
  idUser!: number;
  contacto: Contacto[] = [];

  constructor(
    private contactoService: ContactoService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.cargarNotas();
  }



  cargarNotas() {
    this.nombreUsuario = this.tokenService.getUserName() ?? '';
    this.usuarioService.detailName(this.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
        this.idUser = this.usuario.id;
        this.contactoService.contactoPorRemitente(this.idUser).subscribe(
          data => {
            this.contacto = data;
            this.contacto.reverse(); // Damos la vuelta al array
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
