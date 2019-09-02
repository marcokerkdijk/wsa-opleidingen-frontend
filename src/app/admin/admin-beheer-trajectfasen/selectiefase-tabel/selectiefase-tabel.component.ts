import { Component, OnInit } from '@angular/core';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { Traject } from 'src/app/Objecten/traject';
import { BeheerSelectiefaseComponent } from '../beheer-selectiefase/beheer-selectiefase.component';

@Component({
  selector: 'wsa-selectiefase-tabel',
  templateUrl: './selectiefase-tabel.component.html',
  styleUrls: ['./selectiefase-tabel.component.scss']
})
export class SelectiefaseTabelComponent implements OnInit {
  traject_id:number;
  traject:Traject = new Traject;

  constructor(private beheerSelectieFaseComponent:BeheerSelectiefaseComponent, 
              private adminBeheeTrajectfasenComponent:AdminBeheerTrajectfasenComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,selectieFaseId:number){
    this.beheerSelectieFaseComponent.openModal(id, selectieFaseId);
  }

  openToevoegModalSelectieFase(id){
    this.beheerSelectieFaseComponent.openModal(id, this.traject_id);
  }

  haalTrajectIdOp() {
    this.traject_id = this.adminBeheeTrajectfasenComponent.traject_id;
    this.getAlleSelectieFasen(this.adminBeheeTrajectfasenComponent.traject_id);
    return this.traject_id;
  }

  getAlleSelectieFasen(traject_id): void {
    
  }

}
