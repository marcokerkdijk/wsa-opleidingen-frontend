import { Component, OnInit } from '@angular/core';
import { RecruiterBeheerTrajectfaseComponent } from '../recruiter-beheer-trajectfase.component';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { Traject } from 'src/app/Objecten/traject';
import { RecruiterBeheerSelectiefaseComponent } from '../recruiter-beheer-selectiefase/recruiter-beheer-selectiefase.component';

@Component({
  selector: 'wsa-recruiter-beheer-selectiefase-tabel',
  templateUrl: './recruiter-beheer-selectiefase-tabel.component.html',
  styleUrls: ['./recruiter-beheer-selectiefase-tabel.component.scss']
})
export class RecruiterBeheerSelectiefaseTabelComponent implements OnInit {
  alleSelectieFasen:SelectieFase[];
  traject_id:number;
  traject:Traject = new Traject;

  constructor(private recruiterBeheerSelectieFaseComponent:RecruiterBeheerSelectiefaseComponent, 
    private selectieFaseService:SelectieFaseService, 
    private recruiterBeheerTrajectfasenComponent:RecruiterBeheerTrajectfaseComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,selectieFaseId:number){
    this.recruiterBeheerSelectieFaseComponent.haalSelectieFase(selectieFaseId);
    this.recruiterBeheerSelectieFaseComponent.openModal(id, this.traject_id);
  }

  openToevoegModalSelectieFase(id){
    this.recruiterBeheerSelectieFaseComponent.openModal(id, this.traject_id);
  }

  haalTrajectIdOp() {
    this.traject_id = this.recruiterBeheerTrajectfasenComponent.traject_id;
    this.getAlleSelectieFasen(this.recruiterBeheerTrajectfasenComponent.traject_id);
    return this.traject_id;
  }

  getAlleSelectieFasen(traject_id): void {
    this.selectieFaseService.GeefSelectieFasenPerTraject(traject_id)
        .subscribe(selectieFasen => this.alleSelectieFasen = selectieFasen);
  }

}