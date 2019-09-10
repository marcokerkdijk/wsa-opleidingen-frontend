import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-docent-traject',
  templateUrl: './docent-traject.component.html',
  styleUrls: ['./docent-traject.component.scss']
})
export class DocentTrajectComponent implements OnInit {
  traject: Traject;

  constructor(private dataservice: DataserviceService, private router: Router) { }

  ngOnInit() {
    this.laadTraject();
    this.showStudentenlijst();
  }

  laadTraject(): void {
    this.traject = this.dataservice.getTraject();
    this.dataservice.setTraject_id(this.traject.id);
  }

  showStudentenlijst(): void {
    this.router.navigateByUrl('docent/docent-traject/docent-studentenlijst/' + this.traject.id);
  }
}
