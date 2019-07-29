import { Component, OnInit } from '@angular/core';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/traject';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'wsa-admin-beheer-traject',
  templateUrl: './admin-beheer-traject.component.html',
  styleUrls: ['./admin-beheer-traject.component.scss']
})
export class AdminBeheerTrajectComponent implements OnInit {
  traject:Traject = new Traject;
  alleTrajecten:Traject[];
  wijzigTraject:Traject = new Traject;

  constructor(private modalService: ModalService, private trajectService:TrajectService, private router:Router) { }

  ngOnInit() {
    this.getAlleTrajecten();
  }

  createTraject(traject: Traject){
    this.trajectService.MaakTraject(traject)
    .subscribe(response => this.router.navigateByUrl('/admin'));
  }

  updateTraject(traject: Traject){
    this.trajectService.WijzigTraject(traject, traject.id)
    .subscribe(response => this.router.navigateByUrl('/admin'));
  }

  getAlleTrajecten(): void {
    this.trajectService.GeefAlleTrajecten()
        .subscribe(alleTrajecten => this.alleTrajecten = alleTrajecten);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  clickWijzigModal(id,trajectId:number){
    this.haalTrajectOpId(trajectId);
    this.openModal(id);
  }
  haalTrajectOpId(id:number): void {
    this.wijzigTraject.id = id;
    this.trajectService.haalTrajectOpId(id).subscribe(traject => this.wijzigTraject = traject);
  }

}
