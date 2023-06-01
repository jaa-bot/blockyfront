import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './usuarios/lista-usuario.component';
import { DetalleProductoComponent } from './usuarios/detalle-usuario.component';
import { NuevoProductoComponent } from './usuarios/nuevo-usuario.component';
import { EditarProductoComponent } from './usuarios/editar-usuario.component';
import { interceptorProvider } from './interceptors/usu-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { DetallesNotasComponent } from './notas/detalles-notas/detalles-notas.component';
import { EditarNotasComponent } from './notas/editar-notas/editar-notas.component';
import { ListaNotasComponent } from './notas/lista-notas/lista-notas.component';
import { NuevaNotaComponent } from './notas/nueva-nota/nueva-nota.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { EditarPerfilComponent } from './usuarios/editar-perfil/editar-perfil.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    DetallesNotasComponent,
    EditarNotasComponent,
    ListaNotasComponent,
    NuevaNotaComponent,
    PerfilComponent,
    EditarPerfilComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
