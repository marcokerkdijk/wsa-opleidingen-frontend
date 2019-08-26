import { Component, OnInit } from '@angular/core';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';

import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-recruiter-beheer-traject',
  templateUrl: './recruiter-beheer-traject.component.html',
  styleUrls: ['./recruiter-beheer-traject.component.scss']
})
export class RecruiterBeheerTrajectComponent implements OnInit {
  traject:Traject = new Traject;
  wijzigTraject:Traject = new Traject;
  selectieFase:SelectieFase = new SelectieFase;

  constructor(private modalService: ModalService, private trajectService:TrajectService, private router:Router, 
    private selectieFaseService:SelectieFaseService) { }

    ngOnInit() {
  }

  createTraject(traject: Traject){
    this.trajectService.MaakTraject(traject)
    .subscribe(response => this.router.navigateByUrl('/recruiter').then(success => {
      this.router.navigateByUrl('/recruiter/recruiter-beheer-traject')
    }));
  }

  updateTraject(traject: Traject){
    this.trajectService.WijzigTraject(traject, traject.id)
    .subscribe(response => this.router.navigateByUrl('/recruiter').then(success => {
      this.router.navigateByUrl('/recruiter/recruiter-beheer-traject')
    }));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  haalTrajectOpId(id:number): void {
    this.wijzigTraject.id = id;
    this.trajectService.haalTrajectOpId(id).subscribe(traject => this.wijzigTraject = traject);
  }

  maakNieuweSelectieFase(id:number):void {
    this.selectieFase.id = id;
    this.selectieFaseService.haalSelectieFaseOpId(id).subscribe(response => this.router.navigateByUrl('/recruiter'));
  }

}