import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpleidingsFase } from 'src/app/Objecten/opleidingsfase';
import { Traject } from 'src/app/Objecten/traject';
import { OpleidingsFaseService } from 'src/app/services/opleidings-fase.service';
import { BeheerOpleidingsfaseComponent } from '../beheer-opleidingsfase/beheer-opleidingsfase.component';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';

@Component({
  selector: 'wsa-opleidings-fase-tabel',
  templateUrl: './opleidings-fase-tabel.component.html',
  styleUrls: ['./opleidings-fase-tabel.component.scss']
})
export class OpleidingsFaseTabelComponent implements OnInit {
  alleOpleidingsFasen:OpleidingsFase[];
  traject_id:number;
  traject:Traject = new Traject;

  constructor(private opledingsFaseComponent:BeheerOpleidingsfaseComponent, private opleidingsFaseService:OpleidingsFaseService
  ,  private adminBeheeTrajectfasenComponent:AdminBeheerTrajectfasenComponent) { }

  ngOnInit() {
    this.haalTrajectIdOp();
  }

  clickWijzigModal(id,opleidingsFaseId:number){
    this.opledingsFaseComponent.haalOpleidingsFase(opleidingsFaseId);
    this.opledingsFaseComponent.openModal(id, this.traject_id);
  }

  openToevoegModalOpleidingsFase(id){
    this.opledingsFaseComponent.openModal(id, this.traject_id);
  }

  haalTrajectIdOp() {
    this.traject_id = this.adminBeheeTrajectfasenComponent.traject_id;
    this.getOpleidingsFasen(this.adminBeheeTrajectfasenComponent.traject_id);
    
    return this.traject_id;

  }

  getOpleidingsFasen(traject_id): void {
    this.opleidingsFaseService.GeefOpleidingsFasenPerTraject(traject_id)
        .subscribe(opleidingsFasen => this.alleOpleidingsFasen = opleidingsFasen);
  }

 

}

