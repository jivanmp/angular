import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cluster, ClusterService } from '../../services/cluster.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  public usuarios;
  public usuario: any;
  public modalRef: BsModalRef;
  public postResult = '';

  order = 'first_name';
  reverse = false;

  constructor(
    private clusterService: ClusterService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.usuario = {
      'nombre': '',
      'apellidos': '',
      'avatar': ''
  };
  }

  ngOnInit() {
    this.allUsers();
  }

  allUsers(): void {
    this.clusterService.getClusters()
      .subscribe(clusters => {
        this.usuarios = clusters['data'];
      });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addUser(datos) {
    let cluster: Cluster = {
      id: '',
      first_name: this.usuario.nombre,
      last_name: this.usuario.apellidos,
      avatar: this.usuario.avatar
    };

    this.clusterService.addCluster(cluster).subscribe(
      (data:any) => {
        console.log(data);
        this.modalRef.hide();
        datos.reset();
      }
    )
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
