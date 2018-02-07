import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Cluster, ClusterService} from '../../services/cluster.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {
  usuario;
  idUser;

  constructor(
    private route: ActivatedRoute,
    private clusterService: ClusterService
  ) { }

  ngOnInit() {
    this.idUsuario();
    this.getUsuario();
  }

  idUsuario(){
    this.route.params
      .subscribe(params => {
        this.idUser = this.route.snapshot.params['id'];
      });
  }

  getUsuario(): void {
    this.clusterService.getClusters(this.idUser)
      .subscribe(clusters => {
        this.usuario = clusters['data'];
      });
  }
}
