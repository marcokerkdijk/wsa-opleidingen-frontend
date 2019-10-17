import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { environment } from 'src/environments/environment';
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
export class HomeTrajectenComponent implements OnInit, AfterViewChecked {
  traject: Traject = new Traject();
  tekstObject: TekstObject = new TekstObject();
  zichtbaarTrajecten: Traject[] = new Array;
  trajectonderdelen: TrajectOnderdeel[] = new Array;
  private api: string = environment.apiUrl;
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

  ngAfterViewChecked() {
    try {
      this.sorteerTabel(0);
    }
    catch(error) {
      //Error afhandeling want er kwam een error terwijl alles goed werkt.
    }
  }

  getTrajecten(): void {
    this.homeService.GeefZichtbareTrajectenHome().subscribe(zichtbareTrajecten => {
      this.zichtbaarTrajecten = zichtbareTrajecten;
      this.trajectonderdelen = zichtbareTrajecten[0].trajectOnderdelen;
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

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("trajectonderdeelTabel");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}