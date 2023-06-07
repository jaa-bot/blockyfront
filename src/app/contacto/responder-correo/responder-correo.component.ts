import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-responder-correo',
  templateUrl: './responder-correo.component.html',
  styleUrls: ['./responder-correo.component.css']
})
export class ResponderCorreoComponent implements OnInit {

  contacto!: Contacto

  constructor(
    private contactoService: ContactoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
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
  }
  
  onUpdate(): void {

  }
}
