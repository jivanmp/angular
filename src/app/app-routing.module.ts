import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { DetallesUsuarioComponent } from './usuarios/detalles-usuario/detalles-usuario.component';

const routes: Routes = [
  { path: 'usuarios', component: ListadoUsuariosComponent},
  { path: 'usuarios/:id', component: DetallesUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
