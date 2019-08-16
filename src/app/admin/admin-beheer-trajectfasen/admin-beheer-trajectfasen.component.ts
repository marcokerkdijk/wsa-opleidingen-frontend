import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { TrajectService } from 'src/app/services/traject.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Traject } from 'src/app/Objecten/traject';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { SelectieFaseService } from 'src/app/services/selectie-fase.service';
import { OpleidingsFase } from 'src/app/Objecten/opleidingsfase';

@Component({
  selector: 'wsa-admin-beheer-trajectfasen',
  templateUrl: './admin-beheer-trajectfasen.component.html',
  styleUrls: ['./admin-beheer-trajectfasen.component.scss']
})
export class AdminBeheerTrajectfasenComponent implements OnInit {
  selectieFase:SelectieFase = new SelectieFase;
  nieuweFase:SelectieFase = new SelectieFase;
  gewijzigdeFase:SelectieFase=new SelectieFase;
  selectieFasen:SelectieFase[];
  traject: Traject = new Traject;
  traject_id:number;
  opleidingsFase: OpleidingsFase = new OpleidingsFase;
  opleidingsFasen:OpleidingsFase[];
  

  constructor(private selectieFaseService:SelectieFaseService, private router:Router, 
    private modalService:ModalService, private activeRouter:ActivatedRoute, private trajectService:TrajectService,
    private location:Location) { }

  ngOnInit() {
    this.router.navigated = false;
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.maakTrajectId(id);
    this.haalTrajectOp(id);
  }

   maakTrajectId(id) {
    this.traject_id = id;
  }

  haalTrajectOp(traject_id) {
  this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);  
   
   }

  refreshPagina():void{
    this.router.navigateByUrl("/admin", {skipLocationChange:true}) 
    .then(() =>{
      this.router.navigateByUrl(decodeURI(this.location.path()));
    });
  }
}
