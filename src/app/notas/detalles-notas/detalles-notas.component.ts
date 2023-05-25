import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/app/models/notas';
import { NotasService } from 'src/app/service/notas.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-notas',
  templateUrl: './detalles-notas.component.html',
  styleUrls: ['./detalles-notas.component.css']
})
export class DetallesNotasComponent implements OnInit{

  notas!: Notas;

  constructor(
    private notasService: NotasService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){ }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.notasService.detail(id).subscribe(
      data => {
        this.notas = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaNotas']);
  }

}
