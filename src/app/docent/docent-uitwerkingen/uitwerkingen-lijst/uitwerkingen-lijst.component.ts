import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-uitwerkingen-lijst',
  templateUrl: './uitwerkingen-lijst.component.html',
  styleUrls: ['./uitwerkingen-lijst.component.scss']
})
export class UitwerkingenLijstComponent implements OnInit {
  student: Gebruiker = new Gebruiker();

  constructor(private dataservice: DataserviceService, private router: Router,) { }

  ngOnInit() {
    this.haalStudentOp();
  }

  haalStudentOp(): void {
    this.student = this.dataservice.getGebruiker();
  }

  naarUitwerking(uitwerking: Uitwerking): void {
    this.dataservice.setUitwerking(uitwerking);
    this.router.navigateByUrl('docent/docent-traject/beheer-uitwerking');
  }

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("uitwerkingenlijst");
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
