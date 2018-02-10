import { OrderModule } from 'ngx-order-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrderModule,
    FormsModule
  ],
  declarations: [ListadoUsuariosComponent, DetallesUsuarioComponent]
})
export class UsuariosModule { }
