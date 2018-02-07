import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListadoUsuariosComponent, DetallesUsuarioComponent]
})
export class UsuariosModule { }
