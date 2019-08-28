import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';
import { OpleidingsFase } from 'src/app/Objecten/opleidingsfase';
import { Traject } from 'src/app/Objecten/traject';
import { OpleidingsFaseService } from 'src/app/services/opleidings-fase.service';

@Component({
  selector: 'wsa-recruiter-beheer-opleidingsfase',
  templateUrl: './recruiter-beheer-opleidingsfase.component.html',
  styleUrls: ['./recruiter-beheer-opleidingsfase.component.scss']
})
export class RecruiterBeheerOpleidingsfaseComponent implements OnInit {
  opleidingsFase:OpleidingsFase = new OpleidingsFase;
  nieuweOpleiding:OpleidingsFase = new OpleidingsFase;
  gewijzigdeFase:OpleidingsFase=new OpleidingsFase;
  opleidingsfasen:OpleidingsFase[];
  traject: Traject = new Traject;
  traject_id:number;
  opleidingsfase_id:number;

  constructor(private opleidingsFaseService:OpleidingsFaseService, 
    private router:Router, 
    private modalService:ModalService, 
    private activeRouter:ActivatedRoute, 
    private trajectService:TrajectService,
    private recruiterBeheerTrajectfasen:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.router.navigated = false;
    this.traject_id = this.recruiterBeheerTrajectfasen.traject_id;
    this.haalTrajectOp(this.traject_id);
  }
  haalOpleidingsFase(id:number):void {
    this.opleidingsFase.id = id;
    this.opleidingsFaseService.haalOpleidingsFaseOpId(id).subscribe(opgehaaldeOpleidingsFase => this.opleidingsFase = opgehaaldeOpleidingsFase);
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
    this.opleidingsFaseService.voegOpleidingsFaseToe(nieuweOpleiding,this.traject_id)
    .subscribe(response =>this.recruiterBeheerTrajectfasen.refreshPagina());
    this.closeModal(modalId);
  }

  haalTrajectOp(traject_id) {
  this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);   
   }

  wijzigOpleidingsFase(opleidingsfase, modalId) {
    this.opleidingsFaseService.wijzigOpleidingsFase(opleidingsfase, opleidingsfase.id)
    .subscribe(response =>this.recruiterBeheerTrajectfasen.refreshPagina());
    this.closeModal(modalId);
  }
}