import { Component, OnInit } from '@angular/core';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { Traject } from 'src/app/Objecten/traject';
import { BeheerSelectiefaseComponent } from '../beheer-selectiefase/beheer-selectiefase.component';

@Component({
  selector: 'wsa-selectiefase-tabel',
  templateUrl: './selectiefase-tabel.component.html',
  styleUrls: ['./selectiefase-tabel.component.scss']
})
export class SelectiefaseTabelComponent implements OnInit {
  alleSelectieFasen:SelectieFase[];
  traject_id:number;
  traject:Traject = new Traject;

  constructor(private beheerSelectieFaseComponent:BeheerSelectiefaseComponent, private selectieFaseService:SelectieFaseService
    , private adminBeheeTrajectfasenComponent:AdminBeheerTrajectfasenComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,selectieFaseId:number){
    this.beheerSelectieFaseComponent.haalSelectieFase(selectieFaseId);
    this.beheerSelectieFaseComponent.openModal(id, this.traject_id);
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
    this.selectieFaseService.GeefSelectieFasenPerTraject(traject_id)
        .subscribe(selectieFasen => this.alleSelectieFasen = selectieFasen);
  }

}
