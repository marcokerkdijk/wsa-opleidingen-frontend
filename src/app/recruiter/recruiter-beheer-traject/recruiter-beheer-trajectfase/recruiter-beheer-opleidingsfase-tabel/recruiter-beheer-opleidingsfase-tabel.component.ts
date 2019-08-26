import { Component, OnInit } from '@angular/core';
import { OpleidingsFase } from 'src/app/Objecten/opleidingsfase';
import { Traject } from 'src/app/Objecten/traject';
import { OpleidingsFaseService } from 'src/app/services/opleidings-fase.service';
import { RecruiterBeheerOpleidingsfaseComponent } from '../recruiter-beheer-opleidingsfase/recruiter-beheer-opleidingsfase.component';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';

@Component({
  selector: 'wsa-recruiter-beheer-opleidingsfase-tabel',
  templateUrl: './recruiter-beheer-opleidingsfase-tabel.component.html',
  styleUrls: ['./recruiter-beheer-opleidingsfase-tabel.component.scss']
})
export class RecruiterBeheerOpleidingsfaseTabelComponent implements OnInit {
  alleOpleidingsFasen:OpleidingsFase[];
  traject_id:number;
  traject:Traject = new Traject;
  
   constructor(private opleidingsFaseComponent:RecruiterBeheerOpleidingsfaseComponent, 
    private opleidingsFaseService:OpleidingsFaseService, 
    private recruiterBeheerTrajectfaseComponent:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,opleidingsFaseId:number){
    this.opleidingsFaseComponent.haalOpleidingsFase(opleidingsFaseId);
    this.opleidingsFaseComponent.openModal(id, this.traject_id);
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
    this.opleidingsFaseService.GeefOpleidingsFasenPerTraject(traject_id)
        .subscribe(opleidingsFasen => this.alleOpleidingsFasen = opleidingsFasen);
  }

}