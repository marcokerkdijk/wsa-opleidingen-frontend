import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { Traject } from 'src/app/Objecten/traject';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';


@Component({
  selector: 'wsa-beheer-selectiefase',
  templateUrl: './beheer-selectiefase.component.html',
  styleUrls: ['./beheer-selectiefase.component.scss']
})
export class BeheerSelectiefaseComponent implements OnInit {
  selectieFase:SelectieFase = new SelectieFase;
  nieuweFase:SelectieFase = new SelectieFase;
  gewijzigdeFase:SelectieFase=new SelectieFase;
  selectieFasen:SelectieFase[];
  traject: Traject = new Traject;
  traject_id:number;
  selectieFase_id:number;

  constructor(private selectieFaseService:SelectieFaseService, private router:Router, 
    private modalService:ModalService, private activeRouter:ActivatedRoute, private trajectService:TrajectService,
    private adminBeheerTrajectfasen:AdminBeheerTrajectfasenComponent) { }

  ngOnInit() {
    this.router.navigated = false;
    this.traject_id = this.adminBeheerTrajectfasen.traject_id;
    this.haalTrajectOp(this.traject_id);
  }
  haalSelectieFase(id:number):void {
    this.selectieFase.id = id;
    this.selectieFaseService.haalSelectieFaseOpId(id).subscribe(opgehaaldeSelectieFase => this.selectieFase = opgehaaldeSelectieFase);
  }

  openModal(id: string, selectieFase_id) {
    this.selectieFase_id=selectieFase_id;
    this.haalSelectieFase(selectieFase_id);
    this.modalService.open(id);
    return this.traject_id;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  maakNieuwSelectieFase(nieuweFase,modalId){
    this.selectieFaseService.voegSelectieFaseToe(nieuweFase,this.traject_id)
    .subscribe(response =>this.adminBeheerTrajectfasen.refreshPagina());
    this.closeModal(modalId);
  }

  haalTrajectOp(traject_id) {
  this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);   
   }

  wijzigSelectieFase(selectieFase, modalId) {
    this.selectieFaseService.wijzigSelectieFase(selectieFase, selectieFase.id)
    .subscribe(response =>this.adminBeheerTrajectfasen.refreshPagina());
    this.closeModal(modalId);
  }
}