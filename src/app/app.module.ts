import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RedactarContactoComponent } from './contacto/redactar-contacto/redactar-contacto.component';
import { EnviadosContactoComponent } from './contacto/enviados-contacto/enviados-contacto.component';
import { RecibidosContactoComponent } from './contacto/recibidos-contacto/recibidos-contacto.component';
import { ResponderCorreoComponent } from './contacto/responder-correo/responder-correo.component';
import { DetallesContactoComponent } from './contacto/detalles-contacto/detalles-contacto.component';
import { LogComponentComponent } from './log-component/log-component.component';



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
    RedactarContactoComponent,
    EnviadosContactoComponent,
    RecibidosContactoComponent,
    ResponderCorreoComponent,
    DetallesContactoComponent,
    LogComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
