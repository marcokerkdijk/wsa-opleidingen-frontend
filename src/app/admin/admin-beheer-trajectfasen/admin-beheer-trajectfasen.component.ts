import { Component, OnInit } from '@angular/core';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { SelectieFase } from 'src/app/selectieFase';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'wsa-admin-beheer-trajectfasen',
  templateUrl: './admin-beheer-trajectfasen.component.html',
  styleUrls: ['./admin-beheer-trajectfasen.component.scss']
})
export class AdminBeheerTrajectfasenComponent implements OnInit {
  selectieFase:SelectieFase = new SelectieFase;
  nieuweFase:SelectieFase = new SelectieFase;
  selectieFasen:SelectieFase[];

  constructor(private selectieFaseService:SelectieFaseService, private router:Router, private modalService:ModalService) { }

  ngOnInit() {
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

}
