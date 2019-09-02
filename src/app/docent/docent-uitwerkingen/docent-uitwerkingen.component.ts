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

  constructor(private gebruikerService: GebruikersService, private activeRouter: ActivatedRoute,
              private router: Router, private alertservice: AlertService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalStudentenOp(id);
  }

  haalStudentenOp(id: number): void {
    this.gebruikerService.geefAlleStudentenVanTraject(id).subscribe(studenten => {
      this.studenten = studenten;
    },
    (error) => {
      this.alertservice.error("Er zijn geen studenten aan dit traject gekoppeld.", "alert-1");
    }
    );
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
