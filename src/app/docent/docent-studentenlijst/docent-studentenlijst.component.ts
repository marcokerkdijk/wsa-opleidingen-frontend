import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { AlertService } from 'src/app/_alert';
import { Rol } from 'src/app/rol.enum';
import { GebruikersRol } from 'src/app/model/GebruikersRol';

@Component({
  selector: 'wsa-docent-studentenlijst',
  templateUrl: './docent-studentenlijst.component.html',
  styleUrls: ['./docent-studentenlijst.component.scss']
})
export class DocentStudentenlijstComponent implements OnInit {
  studenten: Gebruiker[];

  constructor(private gebruikerService: GebruikersService, private activeRouter:ActivatedRoute,
              private alertservice: AlertService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalStudentenOp(id);
  }

  /**
   * Aangepast wegens dubbele endpoints -> veranderd naar geefAlleGebruikersOpRolVanTraject
   * @param id = traject_ID
   * @Param GebruikersRol.Student = rol van de opgevraagde gebruiker
   */
  haalStudentenOp(id: number): void {
    this.gebruikerService.haalAlleStudentenVanTraject(id).subscribe(studenten => {
      this.studenten = studenten;
    },
    (error) => {
      this.alertservice.error("Er zijn nog geen studenten aan dit traject gekoppeld.", "alert-1");
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
