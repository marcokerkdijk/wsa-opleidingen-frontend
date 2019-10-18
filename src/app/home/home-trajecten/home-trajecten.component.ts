import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';

@Component({
  selector: 'wsa-home-trajecten',
  templateUrl: './home-trajecten.component.html',
  styleUrls: ['./home-trajecten.component.scss']
})
export class HomeTrajectenComponent implements OnInit {
  traject: Traject = new Traject();
  tekstObject: TekstObject = new TekstObject();
  zichtbaarTrajecten: Traject[] = new Array;
  trajectonderdelen: TrajectOnderdeel[] = new Array;
  afbeeldingen: string[] = [
    "https://www.workingspirit.nl/assets/HH-40894461.jpg",
    "https://www.workingspirit.nl/assets/Uploads/HeaderAfbeeldingen/Softwareontwikkelaars.jpg",
    "https://www.workingspirit.nl/assets/Uploads/HeaderAfbeeldingen/HH-60257639.jpg",
    "https://www.workingspirit.nl/assets/HH-60267130.jpg"
  ]

  constructor(
    private dataService: DataserviceService,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.getTrajecten();
    this.getTekstObject(1);
  }

  getTrajecten(): void {
    this.homeService.GeefZichtbareTrajectenHome().subscribe(zichtbareTrajecten => {
      this.zichtbaarTrajecten = zichtbareTrajecten;
      this.trajectonderdelen = zichtbareTrajecten[0].trajectOnderdelen;
      this.trajectonderdelen.sort((b, a) => new Date(b.startdatum).getTime() - new Date(a.startdatum).getTime());
    });
  }

  gaNaarTrajectInformatie(traject: Traject) {
    this.traject = traject;
    this.dataService.setTraject(traject);
    this.router.navigateByUrl("home/home-trajecten-informatie");
  }

  getTekstObject(tekstObject_id: number) {
    this.homeService.haalTekstObjectOpIdHome(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

}