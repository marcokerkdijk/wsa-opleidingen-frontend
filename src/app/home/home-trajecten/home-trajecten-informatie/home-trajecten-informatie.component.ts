import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';

@Component({
  selector: 'wsa-home-trajecten-informatie',
  templateUrl: './home-trajecten-informatie.component.html',
  styleUrls: ['./home-trajecten-informatie.component.scss']
})
export class HomeTrajectenInformatieComponent implements OnInit {
  traject_id: number;
  traject: Traject = new Traject;
  
  constructor(private trajectService:TrajectService, private activeRouter:ActivatedRoute) { }
  
  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
  }
  
  haalTrajectOp(id: number):void {
    this.trajectService.haalTrajectOpId(id).subscribe(opgehaaldTraject => {
      this.traject = opgehaaldTraject;
    });
  }
}
