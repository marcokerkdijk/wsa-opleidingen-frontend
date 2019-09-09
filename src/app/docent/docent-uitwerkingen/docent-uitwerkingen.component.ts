import { Component, OnInit } from '@angular/core';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-docent-uitwerkingen',
  templateUrl: './docent-uitwerkingen.component.html',
  styleUrls: ['./docent-uitwerkingen.component.scss']
})
export class DocentUitwerkingenComponent implements OnInit {
  studenten: Gebruiker[];
  gelezen: boolean[] = new Array;

  constructor(private gebruikerService: GebruikersService, private activeRouter: ActivatedRoute,
              private router: Router, private alertservice: AlertService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalStudentenOp(id);
  }

  haalStudentenOp(id: number): void {
    this.gebruikerService.haalAlleStudentenVanTraject(id).subscribe(studenten => {
      this.studenten = studenten;
      for (let student of studenten) {
        this.maakGelezenLijst(student);
      }
    },
    (error) => {
      this.alertservice.error("Er zijn geen studenten aan dit traject gekoppeld.", "alert-1");
    }
    );
  }

  /**
   * Maakt een lijst met booleans aan de hand van de gebruikers die binnenkomen.
   * Als de gebruiker een ongelezen uitwerking heeft wordt false aan de lijst gevoegd,
   * als alle uitwerkingen gelezen zijn of als er geen uitwerkingen zijn wordt true toegevoegd.
   * @param gebruiker
   * @author David Smit
   */
  maakGelezenLijst(gebruiker: Gebruiker): void {
    if(this.checkGelezen(gebruiker)) {
      this.gelezen.push(true);
    }
    else {
      this.gelezen.push(false);
    }
  }

  checkGelezen(gebruiker: Gebruiker): boolean {
    let checks: number = 0;

    // Als de gebruiker geen uitwerkingen heeft wordt true gereturnd.
    if(gebruiker.uitwerkingen.length === 0) {
      return true;
    }

    // Voor elke gelezen uitwerking wordt 'checks' opgehoogd.
    for(let uitwerking of gebruiker.uitwerkingen) {
      if(uitwerking.gelezen === true) {
        checks++;
      }
    }

    // Als 'checks' gelijk is aan de lengte van uitwerkingen komt true terug want alle uitwerkingen zijn gelezen, anders false.
    if(checks === gebruiker.uitwerkingen.length) {
      return true;
    }
    else {
      return false;
    }
  }

  naarUitwerkinglijst(student: Gebruiker):void {
    this.router.navigateByUrl('docent/docent-traject/uitwerkingen-lijst/' + student.id);
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
