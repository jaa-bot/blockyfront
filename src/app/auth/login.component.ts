import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';
import { SwPush } from '@angular/service-worker';
import { TokenWebService } from '../service/tokenWeb.service';
import { TokenWeb } from '../models/tokenWeb';

// ...


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BJ8-Fw6EbNzCZ3vNsyUSkhm4WBHD_BrPSf-1V488sGfoxPG6rBy9iPa9P4O7j1mf0sdkk_cD42JIzW7FAHS5fTc";
  readonly VAPID_PRIVATE_KEY = "XUVdHKs0lPt4B0odEIY7JiFnhlxmPv-Gcb0m4-uZ3jQ";

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private swPush: SwPush,
    private tokenWebService: TokenWebService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities() ?? [];
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.subscribeToNotifications();
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
          
        });
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        //this.errMsj = err.error.message;
        this.nombreUsuario = '';
        this.password = '';
        this.toastr.error(this.errMsj, 'Contraseña o nombre usuario incorrecto', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
    ;
  }

  subscribeToNotifications() {



    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(tokens => {

      const authBase64Url = this.bufferToBase64Url(tokens.getKey('auth') || new ArrayBuffer(0));
      const p256dhBase64Url = this.bufferToBase64Url(tokens.getKey('p256dh') || new ArrayBuffer(0));

      const tokenWeb = new TokenWeb(
        tokens.endpoint,
        authBase64Url,
        p256dhBase64Url,
        1
      );

      this.tokenWebService.save(tokenWeb).subscribe(response => {
        // Lógica adicional después de guardar el token
      });

      this.respuesta = tokens;
    }).catch(err => {
      this.respuesta = 'ERROR de permiso o navegador no soportado';
    });
  }

  subscribeUserToPush() {
    return navigator.serviceWorker
      .register('/service-worker.js')
      .then(function (registration) {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: "uwu",
        };
  
        return registration.pushManager.subscribe(subscribeOptions);
      })
      .then(function (pushSubscription) {
        console.log(
          'Received PushSubscription: ',
          JSON.stringify(pushSubscription),
        );
        return pushSubscription;
      });
  }

  bufferToBase64Url(buffer: ArrayBuffer): string {
    const uint8Array = new Uint8Array(buffer);
    const base64 = btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}
