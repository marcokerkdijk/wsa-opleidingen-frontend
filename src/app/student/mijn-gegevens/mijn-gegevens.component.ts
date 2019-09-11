import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { AlertService } from 'src/app/_alert';
import { TrajectService } from 'src/app/services/traject.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-mijn-gegevens',
  templateUrl: './mijn-gegevens.component.html',
  styleUrls: ['./mijn-gegevens.component.scss']
})
export class MijnGegevensComponent implements OnInit {
  studenten: Gebruiker[];
  gebruiker: any;
  trajecten: Traject[];
  traject: any;

  constructor(
    private authenticatieService: AutenticatieService,
    private trajectService: TrajectService,
    private router: Router,
    private gebruikerService: GebruikersService, private activeRouter: ActivatedRoute,
    private alertservice: AlertService
  ) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.HaalTrajectBijGebruikerOp();
  }

  haalGebruikerOp(): void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  HaalTrajectBijGebruikerOp() {
    this.trajectService.haalTrajectenOpVanGebruiker(this.gebruiker.gebruiker_id).subscribe(trajecten => {
      this.trajecten = trajecten;
    },
      (error) => {
        this.alertservice.error("Je bent nog niet aan een traject gekoppeld.", "alert-1");
      });
  }

  haalStudentenOp(id) {
    this.gebruikerService.haalAlleStudentenVanTraject(id).subscribe(studenten => {
      this.studenten = studenten;
    }
    );
  }

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("studentenlijst");
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
