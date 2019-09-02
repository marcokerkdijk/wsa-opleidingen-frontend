import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { Location } from '@angular/common';
import { Traject } from 'src/app/Objecten/traject';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-admin-beheer-trajectfasen',
  templateUrl: './admin-beheer-trajectfasen.component.html',
  styleUrls: ['./admin-beheer-trajectfasen.component.scss']
})
export class AdminBeheerTrajectfasenComponent implements OnInit {
  traject: Traject = new Traject;
  traject_id:number;
  

  constructor(private router:Router, 
    private activeRouter:ActivatedRoute, private trajectService:TrajectService,
    private location:Location, private dataService:DataserviceService) { }

  ngOnInit() {
    this.router.navigated = false;
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.maakTrajectId(id);
    this.haalTrajectOp(id);
  }

   maakTrajectId(id) {
    this.traject_id = id;
    this.dataService.setTraject_id(id);

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
