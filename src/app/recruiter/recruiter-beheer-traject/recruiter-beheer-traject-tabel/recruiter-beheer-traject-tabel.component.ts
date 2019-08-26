import { Component, OnInit } from '@angular/core';
import { RecruiterBeheerTrajectComponent } from '../recruiter-beheer-traject.component';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-recruiter-beheer-traject-tabel',
  templateUrl: './recruiter-beheer-traject-tabel.component.html',
  styleUrls: ['./recruiter-beheer-traject-tabel.component.scss']
})
export class RecruiterBeheerTrajectTabelComponent implements OnInit {
  alleTrajecten:Traject[];

  constructor(private trajectService:TrajectService, private recruiterBeheerTrajectComponent:RecruiterBeheerTrajectComponent) { }

  ngOnInit() {
    this.getAlleTrajecten();
  }

  clickWijzigModal(id,trajectId:number){
    this.recruiterBeheerTrajectComponent.haalTrajectOpId(trajectId);
    this.recruiterBeheerTrajectComponent.openModal(id);
  }

  openToevoegModal(id){
    this.recruiterBeheerTrajectComponent.openModal(id);
  }

  getAlleTrajecten(): void {
    this.trajectService.GeefAlleTrajecten()
        .subscribe(alleTrajecten => this.alleTrajecten = alleTrajecten);
  }

}