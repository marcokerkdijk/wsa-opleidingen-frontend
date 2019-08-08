import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/traject';
import { environment } from 'src/environments/environment';
import { TrajectService } from 'src/app/services/traject.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-home-trajecten',
  templateUrl: './home-trajecten.component.html',
  styleUrls: ['./home-trajecten.component.scss']
})
export class HomeTrajectenComponent implements OnInit {
  traject: Traject = new Traject();
  zichtbaarTrajecten: Traject[];
  private api: string = environment.apiUrl;

  constructor(private dataService: DataserviceService, private trajectService: TrajectService,private router: Router) { }

  ngOnInit() {
    this.getTrajecten();
  }

  getTrajecten(): void {
    this.trajectService.GeefZichtbareTrajectenHome()
      .subscribe(zichtbareTrajecten => this.zichtbaarTrajecten = zichtbareTrajecten);
  }

  gaNaarTrajectInformatie(traject:Traject){
    this.traject = traject;
    this.dataService.setTraject(traject);
    this.router.navigateByUrl("home/home-trajecten-informatie");
  }
}
