import { Component, OnInit } from '@angular/core';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/selectieFase';
import { ActivatedRoute } from '@angular/router';
import { Traject } from 'src/app/traject';

@Component({
  selector: 'wsa-selectiefase-tabel',
  templateUrl: './selectiefase-tabel.component.html',
  styleUrls: ['./selectiefase-tabel.component.scss']
})
export class SelectiefaseTabelComponent implements OnInit {
  alleSelectieFasen:SelectieFase[];
  traject_id:number;
  traject:Traject;

  constructor(private adminBeheerTrajectFaseComponent:AdminBeheerTrajectfasenComponent, private selectieFaseService:SelectieFaseService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  // clickWijzigModal(id,selectieFaseId:number){
  //   this.adminBeheerTrajectFaseComponent.haalSelectieFase(selectieFaseId);
  //   this.adminBeheerTrajectFaseComponent.openModal(id);
  // }

  openToevoegModalSelectieFase(id){
    this.adminBeheerTrajectFaseComponent.openModal(id);
  }

  haalTrajectIdOp() {
    this.traject_id = this.adminBeheerTrajectFaseComponent.traject_id;
    this.getAlleSelectieFasen(this.traject_id);
  }

  getAlleSelectieFasen(traject_id): void {
    this.selectieFaseService.GeefTrajectFasen(traject_id)
        .subscribe(selectieFasen => this.alleSelectieFasen = selectieFasen);
  }

}
