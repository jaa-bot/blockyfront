import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string | null): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    if (token) {
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }

  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string | null {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] | null {
    this.roles = [];
    const authorities = sessionStorage.getItem(AUTHORITIES_KEY);
    if (authorities) {
      JSON.parse(authorities).forEach((authority: any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
  

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
