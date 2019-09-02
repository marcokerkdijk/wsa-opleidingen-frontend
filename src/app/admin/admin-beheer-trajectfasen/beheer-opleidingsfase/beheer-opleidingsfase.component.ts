import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { ModalService } from 'src/app/services/modal.service';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-beheer-opleidingsfase',
  templateUrl: './beheer-opleidingsfase.component.html',
  styleUrls: ['./beheer-opleidingsfase.component.scss']
})
export class BeheerOpleidingsfaseComponent implements OnInit {
  traject: Traject = new Traject;
  traject_id:number;
  opleidingsfase_id:number;

  constructor(private router:Router, private modalService:ModalService, private activeRouter:ActivatedRoute, 
    private trajectService:TrajectService, private adminBeheerTrajectfasen:AdminBeheerTrajectfasenComponent) { }

  ngOnInit() {
    this.router.navigated = false;
    this.traject_id = this.adminBeheerTrajectfasen.traject_id;
    this.haalTrajectOp(this.traject_id);
  }
  
  haalOpleidingsFase(id:number):void {

  }

  openModal(id: string, opleidingsfase_id) {
    this.opleidingsfase_id=opleidingsfase_id;
    this.haalOpleidingsFase(opleidingsfase_id);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  maakNieuwOpleidingsFase(nieuweOpleiding,modalId){

    this.closeModal(modalId);
  }

  haalTrajectOp(traject_id) {
    this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);   
  }

  wijzigOpleidingsFase(opleidingsfase, modalId) {

    this.closeModal(modalId);
  }
}