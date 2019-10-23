import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/_alert';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { UitwerkingDTO } from 'src/app/Objecten/uitwerking-dto';

@Component({
  selector: 'wsa-uitwerkingen-lijst',
  templateUrl: './uitwerkingen-lijst.component.html',
  styleUrls: ['./uitwerkingen-lijst.component.scss']
})
export class UitwerkingenLijstComponent implements OnInit {
  student: Gebruiker = new Gebruiker();
  opdrachtUitwerkingen: UitwerkingDTO[] = new Array;
  OpdrachtUitwerking: UitwerkingDTO = new UitwerkingDTO();

  constructor(private dataservice: DataserviceService, private router: Router, private alertservice: AlertService, 
              private activeRoute: ActivatedRoute, private gebruikerService: GebruikersService, private uitwerkingenService: UitwerkingService) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.haalOpdrachtUitwerkingenOp(id)
    this.haalStudentOp(id);
  }

  haalOpdrachtUitwerkingenOp(gebruiker_id) {
    this.uitwerkingenService.geefUitwerkingenVanStudent(gebruiker_id, "OPDRACHTUITWERKING").subscribe(uitwerkingen => {
      this.opdrachtUitwerkingen = uitwerkingen;
    },
      (error) => {
        this.alertservice.error("Er zijn nog geen uitwerkingen ingeleverd door deze student.", "alert-1");
      }
    );
  }

  haalStudentOp(id: number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(student => {
      this.student = student;
      this.dataservice.setGebruiker(student);
    });
  }

  naarUitwerking(OpdrachtUitwerking: UitwerkingDTO): void {
    this.dataservice.setUitwerkingDTO(OpdrachtUitwerking);
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