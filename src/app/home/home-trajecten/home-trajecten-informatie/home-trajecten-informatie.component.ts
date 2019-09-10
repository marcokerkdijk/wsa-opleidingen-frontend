import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-home-trajecten-informatie',
  templateUrl: './home-trajecten-informatie.component.html',
  styleUrls: ['./home-trajecten-informatie.component.scss']
})
export class HomeTrajectenInformatieComponent implements OnInit {
  traject_id: number;
  traject: Traject = new Traject;
  
  constructor(private dataservice:DataserviceService) { }
  
  ngOnInit() {
    this.haalTrajectOp();
  }
  
  haalTrajectOp():void {
    this.traject = this.dataservice.getTraject();
  }
}
