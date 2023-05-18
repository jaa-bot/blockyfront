import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  isLogged = false;
  roles!: string[] | null;
  isAdmin = false;

  constructor(private tokenService: TokenService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.roles = this.tokenService.getAuthorities()?? [];
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}

