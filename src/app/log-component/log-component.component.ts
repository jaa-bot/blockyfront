import { Component, OnInit } from '@angular/core';
import { Log } from '../models/log';
import { LogService } from '../service/log.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-log-component',
  templateUrl: './log-component.component.html',
  styleUrls: ['./log-component.component.css']
})
export class LogComponentComponent implements OnInit {

  productos!: Log[];
  roles!: string[] | null;
  isAdmin = false;

  constructor(
    private usuarioService: LogService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities() ?? [];
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.usuarioService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  confirmarBorrar(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.borrar(id);
    }
  }
}
