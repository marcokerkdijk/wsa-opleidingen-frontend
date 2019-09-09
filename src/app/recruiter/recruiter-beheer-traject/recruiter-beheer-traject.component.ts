import { Component, OnInit } from '@angular/core';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'wsa-recruiter-beheer-traject',
  templateUrl: './recruiter-beheer-traject.component.html',
  styleUrls: ['./recruiter-beheer-traject.component.scss']
})
export class RecruiterBeheerTrajectComponent implements OnInit {
  traject:Traject = new Traject;
  wijzigTraject:Traject = new Traject;

  constructor(private modalService: ModalService, 
    private trajectService:TrajectService, private router:Router) { }

    ngOnInit() {
  }

  createTraject(traject: Traject){
    this.trajectService.maakTrajectAan(traject)
    .subscribe(response => this.router.navigateByUrl('/recruiter').then(success => {
      this.router.navigateByUrl('/recruiter/recruiter-beheer-traject')
    }));
  }

  // updateTraject(traject: Traject){
  //   this.trajectService.wijzigTraject(traject, traject.id)
  //   .subscribe(response => this.router.navigateByUrl('/recruiter').then(success => {
  //     this.router.navigateByUrl('/recruiter/recruiter-beheer-traject')
  //   }));
  // }

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

}