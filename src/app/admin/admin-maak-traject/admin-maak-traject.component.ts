import { Component, OnInit } from '@angular/core';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/traject';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-admin-maak-traject',
  templateUrl: './admin-maak-traject.component.html',
  styleUrls: ['./admin-maak-traject.component.scss']
})
export class AdminMaakTrajectComponent implements OnInit {
  traject:Traject = new Traject;

  constructor(private trajectService:TrajectService, private router:Router) { }

  ngOnInit() {
  }

  createTraject(traject: Traject){
    this.trajectService.MaakTraject(traject)
    .subscribe(response => this.router.navigateByUrl('/admin-maak-traject'));
  }

}
