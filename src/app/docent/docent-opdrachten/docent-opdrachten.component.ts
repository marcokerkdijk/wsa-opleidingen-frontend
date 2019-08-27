import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-docent-opdrachten',
  templateUrl: './docent-opdrachten.component.html',
  styleUrls: ['./docent-opdrachten.component.scss']
})
export class DocentOpdrachtenComponent implements OnInit {
  traject_id: number;
  opdrachten: Opdracht[] = new Array;
  zichtbaar: boolean[] = new Array;

  constructor(private dataservice: DataserviceService, private opdrachtService: OpdrachtService,
              private router: Router) { }

  ngOnInit() {
    this.krijgTrajectId();
    this.krijgOpdrachtenVanTraject();
  }

  krijgTrajectId(): void {
    this.traject_id = this.dataservice.getTraject_id();
  }

  krijgOpdrachtenVanTraject(): void {
    this.opdrachtService.geefAlleOpdrachtenVanTraject(this.traject_id)
        .subscribe(opdrachtlijst => this.opdrachten = opdrachtlijst);
  }

  wijzigOpdracht(opdracht: Opdracht): void {
    this.dataservice.setOpdracht(opdracht);
  }

  maakBooleanLijst(): void {
    this.zichtbaar.concat(false);
  }

  toggle(index: number): void {
    this.zichtbaar[index] = !this.zichtbaar[index];
  }

  verwijderOpdracht(opdracht: Opdracht): void {
    // alert("Weet je zeker dat je de opdracht '" + opdracht.titel + "' wilt verwijderen?");
    this.opdrachtService.verwijderOpdracht(opdracht)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('docent/docent-traject/docent-opdrachten');
        }));
  }
}
