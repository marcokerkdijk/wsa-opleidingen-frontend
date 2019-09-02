import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { RecruiterBeheerOpleidingsfaseComponent } from '../recruiter-beheer-opleidingsfase/recruiter-beheer-opleidingsfase.component';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';

@Component({
  selector: 'wsa-recruiter-beheer-opleidingsfase-tabel',
  templateUrl: './recruiter-beheer-opleidingsfase-tabel.component.html',
  styleUrls: ['./recruiter-beheer-opleidingsfase-tabel.component.scss']
})
export class RecruiterBeheerOpleidingsfaseTabelComponent implements OnInit {
  traject_id:number;
  traject:Traject = new Traject;
  
  constructor(private opleidingsFaseComponent:RecruiterBeheerOpleidingsfaseComponent,
              private recruiterBeheerTrajectfaseComponent:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,opleidingsFaseId:number){
    this.opleidingsFaseComponent.openModal(id, opleidingsFaseId);
  }

  openToevoegModalOpleidingsFase(id){
    this.opleidingsFaseComponent.openModal(id, this.traject_id);
  }

  haalTrajectIdOp() {
    this.traject_id = this.recruiterBeheerTrajectfaseComponent.traject_id;
    this.getOpleidingsFasen(this.recruiterBeheerTrajectfaseComponent.traject_id);
    return this.traject_id;
  }

  getOpleidingsFasen(traject_id): void {
    
  }

}