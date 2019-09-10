import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { AutenticatieService, JwtToken } from 'src/app/services/autenticatie.service';
import { TrajectService } from 'src/app/services/traject.service';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit, AfterViewChecked {
  gebruiker:JwtToken;
  index: number = 0;
  trajecten: Traject[];
  
  constructor(private authenticatieService:AutenticatieService, private trajectService: TrajectService,
              private alertservice: AlertService ) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.HaalTrajectBijGebruikerOp();
  }

  ngAfterViewChecked() {
    try {
      this.sorteerTabel(0);
    }
    catch(error) {
      //Error afhandeling want er kwam een error terwijl alles goed werkt.
    }
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  HaalTrajectBijGebruikerOp(){
    this.trajectService.geefAlleTrajectenVanGebruiker(this.gebruiker.gebruiker_id).subscribe(trajecten => {
      this.trajecten = trajecten;
    },
    (error) => {
      this.alertservice.error("Je bent nog niet aan een traject gekoppeld.", "alert-1");
    });
  }

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("agendatabel");
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