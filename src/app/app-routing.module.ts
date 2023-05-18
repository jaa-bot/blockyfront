import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-usuario.component';
import { DetalleProductoComponent } from './producto/detalle-usuario.component';
import { NuevoProductoComponent } from './producto/nuevo-usuario.component';
import { EditarProductoComponent } from './producto/editar-usuario.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/usu-guard.service';
import { ListaNotasComponent } from './notas/lista-notas/lista-notas.component';
import { NuevaNotaComponent } from './notas/nueva-nota/nueva-nota.component';
import { DetallesNotasComponent } from './notas/detalles-notas/detalles-notas.component';
import { EditarNotasComponent } from './notas/editar-notas/editar-notas.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'listaNotas', component: ListaNotasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleNotas/:id', component: DetallesNotasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo/:id', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoNotas', component: NuevaNotaComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarNotas/:id', component: EditarNotasComponent, canActivate: [guard], data: { expectedRol: ['admin','user'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
