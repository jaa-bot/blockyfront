import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { TokenWebService } from './service/tokenWeb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BMtQTXeTAMb6dirLG0o2oMENske28eSfSRJkK6VEdXH9lcH3mwfEU7cza8hNhEnJOOyacb95QOeIFaTpPdFn8Xw";

  constructor(
    private swPush: SwPush,
    private tokenWebService: TokenWebService)
  {

  }
  ngOnInit(): void
  {
    this.subscribeToNotifications();
  }


  subscribeToNotifications()
  {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then((respuesta: any) =>
    {
      this.respuesta = respuesta;
    })
      .catch((err: any) =>
      {
        this.respuesta = err;
      });

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(tokens =>
    {

      this.tokenWebService.save({
        tokens: JSON.parse(JSON.stringify(tokens))
      }).subscribe(respueta =>
      {

      });

      this.respuesta = tokens;
    })
      .catch(err =>
      {
        this.respuesta = 'ERROR de permiso o navegador no soportado';
      });
  }
}
