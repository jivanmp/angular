import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cluster, ClusterService } from '../../services/cluster.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios;
  public modalRef: BsModalRef;

  rForm: FormGroup;
  post: any;
  nombre = '';
  trabajo = '';

  constructor(
    private clusterService: ClusterService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      'nombre' : [null, Validators.required],
      'trabajo' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
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
    this.modalRef = this.modalService.show(template); // {3}
  }

  addUser() {
    console.log('siiii');

    this.trabajo = this.post.trabajo;
    this.nombre = this.post.nombre;

    /*
    let cluster: Cluster = {
      name: 'Perico',
      job: 'Trabajo de perico'
    };
    this.clusterService.addCluster(cluster).subscribe(
      (data:any) => {
        console.log(data);
      }
    )
    */
  }

}
