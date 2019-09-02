import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-recruiter-beheer-selectiefase',
  templateUrl: './recruiter-beheer-selectiefase.component.html',
  styleUrls: ['./recruiter-beheer-selectiefase.component.scss']
})

export class RecruiterBeheerSelectiefaseComponent implements OnInit {
  traject: Traject = new Traject;
  traject_id:number;
  selectieFase_id:number;

  constructor(private router:Router, private modalService:ModalService, private trajectService:TrajectService,
              private recruiterBeheerTrajectfasen:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.router.navigated = false;
    this.traject_id = this.recruiterBeheerTrajectfasen.traject_id;
    this.haalTrajectOp(this.traject_id);
  }

  haalSelectieFase(id:number):void {
    
  }

  openModal(id: string, selectieFase_id) {
    this.selectieFase_id=selectieFase_id;
    if(id == "trajectFase-wijzig-modal"){
      this.haalSelectieFase(selectieFase_id);
    }
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  maakNieuwSelectieFase(nieuweFase,modalId){
    this.closeModal(modalId);
  }

  haalTrajectOp(traject_id) {
  this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);   
   }

  wijzigSelectieFase(selectieFase, modalId) {
    this.closeModal(modalId);
  }

}