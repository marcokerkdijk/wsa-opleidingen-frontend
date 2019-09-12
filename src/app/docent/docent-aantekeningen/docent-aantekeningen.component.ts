import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { AlertService } from 'src/app/_alert';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-docent-aantekeningen',
  templateUrl: './docent-aantekeningen.component.html',
  styleUrls: ['./docent-aantekeningen.component.scss']
})
export class DocentAantekeningenComponent implements OnInit {
  traject_id: number;
  aantekeningen: Aantekening[] = new Array;
  zichtbaar: boolean[] = new Array;
  toonOmschrijving: boolean[] = new Array;

  constructor(private dataservice: DataserviceService, private aantekeningservice: AantekeningserviceService,
              private alertservice: AlertService, private router: Router) { }

  ngOnInit() {
    this.krijgTrajectId();
    this.krijgAantekeningenVanTraject();
  }

  krijgTrajectId(): void {
    this.traject_id = this.dataservice.getTraject_id();
  }

  krijgAantekeningenVanTraject(): void {
    this.aantekeningservice.geefAantekeningenVanTraject(this.traject_id)
        .subscribe(aantekeningenlijst => {
          this.aantekeningen = aantekeningenlijst;
        },
        (error) => {
          this.alertservice.error("Dit traject heeft nog geen aantekeningen.", "alert-1");
        });
  }

  wijzigAantekening(aantekening: Aantekening): void {
    this.dataservice.setAantekening(aantekening);
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

  verwijderAantekening(aantekening: Aantekening): void {
    this.aantekeningservice.verwijderAantekening(aantekening)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('docent/docent-traject/docent-aantekeningen');
        }));
  }
}
