import { Component, OnInit } from '@angular/core';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen.component';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/selectieFase';

@Component({
  selector: 'wsa-trajectfase-tabel',
  templateUrl: './trajectfase-tabel.component.html',
  styleUrls: ['./trajectfase-tabel.component.scss']
})
export class TrajectfaseTabelComponent implements OnInit {
  alleSelectieFasen:SelectieFase[];

  constructor(private adminBeheerTrajectFaseComponent:AdminBeheerTrajectfasenComponent, private selectieFaseService:SelectieFaseService) { }

  ngOnInit() {
    this.getAlleSelectieFasen();
  }

  clickWijzigModal(id,selectieFaseId:number){
    this.adminBeheerTrajectFaseComponent.haalSelectieFase(selectieFaseId);
    this.adminBeheerTrajectFaseComponent.openModal(id);
  }

  openToevoegModalSelectieFase(id){
    this.adminBeheerTrajectFaseComponent.openModal(id);
  }

  getAlleSelectieFasen(): void {
    this.selectieFaseService.GeefAlleSelectieFasen()
        .subscribe(selectieFasen => this.alleSelectieFasen = selectieFasen);
  }

}
