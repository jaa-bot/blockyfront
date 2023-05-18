import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { TokenService } from '../service/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardService implements CanActivate {

  realRol!: string;
  roles!: string[];

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    const expectedRol = route.data['expectedRol'];
    this.roles = this.tokenService.getAuthorities() ?? [];
    this.realRol = 'user';
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
