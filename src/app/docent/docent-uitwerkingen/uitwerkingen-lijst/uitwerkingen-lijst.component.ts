import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/_alert';
import { GebruikersService } from 'src/app/services/gebruikers.service';

@Component({
  selector: 'wsa-uitwerkingen-lijst',
  templateUrl: './uitwerkingen-lijst.component.html',
  styleUrls: ['./uitwerkingen-lijst.component.scss']
})
export class UitwerkingenLijstComponent implements OnInit {
  student: Gebruiker = new Gebruiker();

  constructor(private dataservice: DataserviceService, private router: Router, private alertservice: AlertService, 
              private activeRoute: ActivatedRoute, private gebruikerService: GebruikersService) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.haalStudentOp(id);
  }

  haalStudentOp(id: number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(student => {
      this.student = student;
      this.dataservice.setGebruiker(student);
      if (student.uitwerkingen.length === 0) {
        this.foutmelding();
      }
    });
  }

  foutmelding(): void {
    this.alertservice.error("Deze student heeft nog geen uitwerkingen ingeleverd.", "alert-1");
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
