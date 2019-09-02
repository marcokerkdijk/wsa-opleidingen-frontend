import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-recruiter-beheer-opleidingsfase',
  templateUrl: './recruiter-beheer-opleidingsfase.component.html',
  styleUrls: ['./recruiter-beheer-opleidingsfase.component.scss']
})
export class RecruiterBeheerOpleidingsfaseComponent implements OnInit {
  traject: Traject = new Traject;
  traject_id:number;
  opleidingsfase_id:number;

  constructor(private router:Router, private modalService:ModalService, private trajectService:TrajectService,
              private recruiterBeheerTrajectfasen:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.router.navigated = false;
    this.traject_id = this.recruiterBeheerTrajectfasen.traject_id;
    this.haalTrajectOp(this.traject_id);
  }
  haalOpleidingsFase(id:number):void {

  }

  openModal(id: string, opleidingsfase_id) {
    this.opleidingsfase_id=opleidingsfase_id;
    if(id == "opleidingsFase-wijzig-modal"){
      this.haalOpleidingsFase(opleidingsfase_id);
    }
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