import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './usuarios/lista-usuario.component';
import { DetalleProductoComponent } from './usuarios/detalle-usuario.component';
import { NuevoProductoComponent } from './usuarios/nuevo-usuario.component';
import { EditarProductoComponent } from './usuarios/editar-usuario.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/usu-guard.service';
import { ListaNotasComponent } from './notas/lista-notas/lista-notas.component';
import { NuevaNotaComponent } from './notas/nueva-nota/nueva-nota.component';
import { DetallesNotasComponent } from './notas/detalles-notas/detalles-notas.component';
import { EditarNotasComponent } from './notas/editar-notas/editar-notas.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { EditarPerfilComponent } from './usuarios/editar-perfil/editar-perfil.component';
import { RedactarContactoComponent } from './contacto/redactar-contacto/redactar-contacto.component';
import { EnviadosContactoComponent } from './contacto/enviados-contacto/enviados-contacto.component';
import { RecibidosContactoComponent } from './contacto/recibidos-contacto/recibidos-contacto.component';
import { ResponderCorreoComponent } from './contacto/responder-correo/responder-correo.component';
import { DetallesContactoComponent } from './contacto/detalles-contacto/detalles-contacto.component';
import { LogComponentComponent } from './log-component/log-component.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaNotas', component: ListaNotasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'detalleNotas/:id', component: DetallesNotasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo/:id', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoNotas', component: NuevaNotaComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarPerfil/:id', component: EditarPerfilComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'perfil', component: PerfilComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
  { path: 'editarNotas/:id', component: EditarNotasComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
  { path: 'redactar', component: RedactarContactoComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
  { path: 'enviados', component: EnviadosContactoComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'responder/:id', component: ResponderCorreoComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'recibidos', component: RecibidosContactoComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'verCorreo/:id', component: DetallesContactoComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'verLog', component: LogComponentComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
