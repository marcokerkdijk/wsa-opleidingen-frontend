import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-docent-opdrachten',
  templateUrl: './docent-opdrachten.component.html',
  styleUrls: ['./docent-opdrachten.component.scss']
})
export class DocentOpdrachtenComponent implements OnInit {
  traject_id: number;
  opdrachten: Opdracht[] = new Array;
  zichtbaar: boolean[] = new Array;
  toonOmschrijving: boolean[] = new Array;
  filterwaarde: number;

  constructor(private dataservice: DataserviceService, private opdrachtService: OpdrachtService,
    private router: Router, private alertservice: AlertService) { }

  ngOnInit() {
    this.krijgTrajectId();
    this.krijgOpdrachtenVanTraject();
  }

  krijgTrajectId(): void {
    this.traject_id = this.dataservice.getTraject_id();
  }

  krijgOpdrachtenVanTraject(): void {
    this.opdrachtService.geefAlleOpdrachtenVanTraject(this.traject_id)
      .subscribe(opdrachtlijst => {
        this.opdrachten = opdrachtlijst;
      },
        (error) => {
          this.alertservice.error("Dit traject heeft nog geen opdrachten.", "alert-1");
        });
  }

  wijzigOpdracht(opdracht: Opdracht): void {
    this.dataservice.setOpdracht(opdracht);
  }

  maakBooleanLijst(): void {
    this.zichtbaar.concat(false);
    this.toonOmschrijving.concat(false);
  }

  toggle(index: number): void {
    this.zichtbaar[index] = !this.zichtbaar[index];
  }

  toggleOmschrijving(index: number): void {
    this.toonOmschrijving[index] = !this.toonOmschrijving[index];
  }

  filterTabel(input: number) {
    var filter, tabel, tr, td, i, txtValue;
    filter = input;
    tabel = document.getElementById("opdrachtentabel");
    tr = tabel.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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

  resetFilter(): void {
    this.krijgOpdrachtenVanTraject();
  }

  maakOpdrachtenZichtbaar(dag: number): void {
    this.opdrachtService.maakOpdrachtenZichtbaar(dag).subscribe(response => {
      this.router.navigateByUrl('/docent/docent-traject').then(success => {
        this.router.navigateByUrl('docent/docent-traject/docent-opdrachten');
      });
    });
  }

  maakOpdrachtenNietZichtbaar(dag: number): void {
    this.opdrachtService.maakOpdrachtenNietZichtbaar(dag).subscribe(response => {
      this.router.navigateByUrl('/docent/docent-traject').then(success => {
        this.router.navigateByUrl('docent/docent-traject/docent-opdrachten');
      });
    });
  }

  verwijderOpdracht(opdracht: Opdracht): void {
    this.opdrachtService.verwijderOpdracht(opdracht)
      .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
        this.router.navigateByUrl('docent/docent-traject/docent-opdrachten');
      }));
  }
}
