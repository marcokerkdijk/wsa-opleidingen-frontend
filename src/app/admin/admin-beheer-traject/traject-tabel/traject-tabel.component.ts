import { Component, OnInit } from '@angular/core';
import { AdminBeheerTrajectComponent } from '../admin-beheer-traject.component';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/traject';

@Component({
  selector: 'wsa-traject-tabel',
  templateUrl: './traject-tabel.component.html',
  styleUrls: ['./traject-tabel.component.scss']
})
export class TrajectTabelComponent implements OnInit {
  alleTrajecten:Traject[];

  constructor(private trajectService:TrajectService, private adminBeheerTrajectCompnent:AdminBeheerTrajectComponent) { }

  ngOnInit() {
    this.getAlleTrajecten();
  }

  clickWijzigModal(id,trajectId:number){
    this.adminBeheerTrajectCompnent.haalTrajectOpId(trajectId);
    this.adminBeheerTrajectCompnent.openModal(id);
  }

  openToevoegModal(id){
    this.adminBeheerTrajectCompnent.openModal(id);
  }

  getAlleTrajecten(): void {
    this.trajectService.GeefAlleTrajecten()
        .subscribe(alleTrajecten => this.alleTrajecten = alleTrajecten);
  }

}
