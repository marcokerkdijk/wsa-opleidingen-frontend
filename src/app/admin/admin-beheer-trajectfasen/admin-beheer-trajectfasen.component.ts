import { Component, OnInit } from '@angular/core';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/selectieFase';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/traject';
import { Location } from '@angular/common';

@Component({
  selector: 'wsa-admin-beheer-trajectfasen',
  templateUrl: './admin-beheer-trajectfasen.component.html',
  styleUrls: ['./admin-beheer-trajectfasen.component.scss']
})
export class AdminBeheerTrajectfasenComponent implements OnInit {
  selectieFase:SelectieFase = new SelectieFase;
  nieuweFase:SelectieFase = new SelectieFase;
  gewijzigdeFase:SelectieFase=new SelectieFase;
  selectieFasen:SelectieFase[];
  traject: Traject;
  traject_id:number;

  constructor(private selectieFaseService:SelectieFaseService, private router:Router, 
    private modalService:ModalService, private activeRouter:ActivatedRoute, private trajectService:TrajectService,
    private location:Location) { }

  ngOnInit() {
    this.router.navigated = false;
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.maakTrajectId(id);
  }
  haalSelectieFase(id:number):void {
    this.selectieFase.id = id;
    this.selectieFaseService.haalSelectieFaseOpId(id).subscribe(opgehaaldeSelectieFase => this.selectieFase = opgehaaldeSelectieFase);
  }

  openModal(id: string, traject_id) {
    this.traject_id=traject_id;
    this.modalService.open(id);
    return this.traject_id;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  maakNieuwSelectieFase(nieuweFase,modalId){
    this.selectieFaseService.voegSelectieFaseToe(nieuweFase,this.traject_id)
    .subscribe(response =>this.refreshPagina());
    this.closeModal(modalId);
  }

  maakTrajectId(id) {
    this.traject_id = id;
  }

  haalTrajectOp() {
   this.trajectService.haalTrajectOpId(this.traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

  wijzigSelectieFase(selectieFase, modalId) {
    
    this.selectieFaseService.wijzigSelectieFase(selectieFase, selectieFase.id)
    .subscribe(response =>this.refreshPagina());
    this.closeModal(modalId);
    
  }

  refreshPagina():void{
    this.router.navigateByUrl("/admin", {skipLocationChange:true}) 
    .then(() =>{
      this.router.navigateByUrl(decodeURI(this.location.path()));
    });
  }

}
