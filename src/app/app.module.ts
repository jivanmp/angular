import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClusterService } from './services/cluster.service';
import { NavbarComponent } from './navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    AppRoutingModule
  ],
  providers: [ClusterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
