import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute, Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { AlertService } from 'src/app/_alert';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { UitwerkingDTO } from 'src/app/Objecten/uitwerking-dto';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-beheer-resultaten',
  templateUrl: './beheer-resultaten.component.html',
  styleUrls: ['./beheer-resultaten.component.scss']
})
export class BeheerResultatenComponent implements OnInit {
  rolIngelogdeGebruiker: string;
  traject: Traject = new Traject;
  uitwerkingenlijst: UitwerkingDTO[] = new Array;
  filterwaarde: string;
  tekstObject: TekstObject = new TekstObject();
  zichtbaar: boolean[] = new Array;

  constructor(private activeRouter: ActivatedRoute, private trajectService: TrajectService,
    private uitwerkingService: UitwerkingService, private router: Router,
    private alertservice: AlertService, private dataservice: DataserviceService,
    private authenticatieService: AutenticatieService, private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
    this.haalUitwerkingenOp(id);
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
    this.getTekstObject(12);
  }

  haalTrajectOp(traject_id) {
    this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

  haalUitwerkingenOp(traject_id): void {
    this.uitwerkingService.geefAssessmentUitwerkingenVanTraject(traject_id).subscribe(uitwerkingenlijst => {
      this.uitwerkingenlijst = uitwerkingenlijst;
    },
      (error) => {
        this.alertservice.clear("alert-1")
        this.alertservice.error("Er zijn nog geen assessmentresultaten beschikbaar voor dit traject.", "alert-1");
      });
  }

  setTrajectId(): void {
    this.dataservice.setTraject_id(this.traject.id);
  }

  navigeerNaar(url: string): void {
    this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/' + url + '/' + this.traject.id);
  }

  naarWijzigPagina(id: number): void {
    this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/resultaat-wijzigen/' + id);
  }

  maakBooleanLijst(): void {
    this.zichtbaar.concat(false);
  }

  toggle(index: number): void {
    this.zichtbaar[index] = !this.zichtbaar[index];
  }

  verwijderResultaat(resultaatDTO: UitwerkingDTO) {
    this.uitwerkingService.verwijderAssessmentResultaat(resultaatDTO.id).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker).then(success => {
        this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-resultaten/' + this.traject.id);
      });
    },
    (error) => {
      this.alertservice.clear("alert-1");
      this.alertservice.error("Er ging iets mis bij het verwijderen van een resultaat.", "alert-1");
    });
  }

  downloadPdf(uitwerking: UitwerkingDTO): void {
    let newPdfWindow = window.open("","Print");

    let content = encodeURIComponent(uitwerking.byteString);
    
    let iframeStart = "<\iframe width='100%' height='100%' src='data:application/pdf;base64, ";
    
    let iframeEnd = "'><\/iframe>";
    
    newPdfWindow.document.write(iframeStart + content + iframeEnd);
  }

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("uitwerkingtabel");
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

  filterStudenten(input: string): void {
    var filter, tabel, tr, td, i, txtValue;
    filter = input.toUpperCase();
    tabel = document.getElementById("uitwerkingtabel");
    tr = tabel.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}
