import { Component, OnInit } from '@angular/core';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/selectieFase';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/traject';

@Component({
  selector: 'wsa-admin-beheer-trajectfasen',
  templateUrl: './admin-beheer-trajectfasen.component.html',
  styleUrls: ['./admin-beheer-trajectfasen.component.scss']
})
export class AdminBeheerTrajectfasenComponent implements OnInit {
  selectieFase:SelectieFase = new SelectieFase;
  nieuweFase:SelectieFase = new SelectieFase;
  selectieFasen:SelectieFase[];
  traject: Traject;
  traject_id:number;

  constructor(private selectieFaseService:SelectieFaseService, private router:Router, 
    private modalService:ModalService, private activeRouter:ActivatedRoute, private trajectService:TrajectService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.maakTrajectId(id);
  }
  haalSelectieFase(id:number):void {
    this.selectieFase.id = id;
    this.selectieFaseService.haalSelectieFaseOpId(id).subscribe(response => this.router.navigateByUrl('/admin'));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  maakNieuwSelectieFase(nieuweFase){
    this.selectieFaseService.voegSelectieFaseToe(nieuweFase)
    .subscribe(response => this.router.navigateByUrl('/admin'));
  }

  maakTrajectId(id) {
    this.traject_id = id;
  }

  haalTrajectOp() {
   return this.trajectService.haalTrajectOpId(this.traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

}
