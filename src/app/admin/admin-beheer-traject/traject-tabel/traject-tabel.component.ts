import { Component, OnInit } from '@angular/core';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-traject-tabel',
  templateUrl: './traject-tabel.component.html',
  styleUrls: ['./traject-tabel.component.scss']
})
export class TrajectTabelComponent implements OnInit {
  alleTrajecten:Traject[];

  constructor(private trajectService:TrajectService, private alertservice: AlertService) { }

  ngOnInit() {
    this.getAlleTrajecten();
  }

  getAlleTrajecten(): void {
    this.trajectService.GeefAlleTrajecten().subscribe(alleTrajecten => {
      this.alleTrajecten = alleTrajecten;
    },
    (error) => {
      this.alertservice.error("Er zijn nog geen trajecten aangemaakt.", "alert-1");
    });
  }
}