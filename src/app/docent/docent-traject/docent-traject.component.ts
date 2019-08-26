import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-docent-traject',
  templateUrl: './docent-traject.component.html',
  styleUrls: ['./docent-traject.component.scss']
})
export class DocentTrajectComponent implements OnInit {
  traject: Traject;

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.laadTraject();
  }

  laadTraject(): void {
    this.traject = this.dataservice.getTraject();
    this.dataservice.setTraject_id(this.traject.id);
  }
}
