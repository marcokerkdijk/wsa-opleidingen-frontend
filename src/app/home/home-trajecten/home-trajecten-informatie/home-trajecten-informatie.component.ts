import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { Router, ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { HomeTrajectenComponent } from '../home-trajecten.component';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-home-trajecten-informatie',
  templateUrl: './home-trajecten-informatie.component.html',
  styleUrls: ['./home-trajecten-informatie.component.scss']
})
export class HomeTrajectenInformatieComponent implements OnInit {
  traject_id: number;
  traject: Traject = new Traject;
  
  constructor(private dataService: DataserviceService, private trajectService:TrajectService, private router:Router, private activeRouter:ActivatedRoute, private comp: HomeTrajectenComponent) { }
  
  ngOnInit() {
    this.traject = this.dataService.getTraject();
 
  }
  
 

}
