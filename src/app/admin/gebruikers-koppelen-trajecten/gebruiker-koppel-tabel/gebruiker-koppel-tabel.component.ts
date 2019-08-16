import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { GebruikersRol } from 'src/app/model/GebruikersRol';
import { GebruikersKoppelenTrajectenComponent } from '../gebruikers-koppelen-trajecten.component';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-gebruiker-koppel-tabel',
  templateUrl: './gebruiker-koppel-tabel.component.html',
  styleUrls: ['./gebruiker-koppel-tabel.component.scss']
})
export class GebruikerKoppelTabelComponent implements OnInit {
  studenten:Gebruiker[];
  docenten:Gebruiker[];
  trajectId:number;
  rol:GebruikersRol;

  constructor(private gebruikerService:GebruikersService, private gebruikersKoppelen:GebruikersKoppelenTrajectenComponent,
    private dataService:DataserviceService) { }

  ngOnInit() {
    this.trajectId=this.dataService.getTraject_id();
    this.haalGekoppeldStudentOp(this.trajectId);
    this.haalGekoppeldeDocentOp(this.trajectId);
    console.log(this.trajectId, "piet");
  }

  haalGekoppeldeDocentOp (id): void {
    this.gebruikerService.haalDocentOpMetTraject(id).subscribe(gebruiker => this.docenten = gebruiker);
  }

  haalGekoppeldStudentOp (id): void {
    this.gebruikerService.geefAlleStudentenVanTraject(id).subscribe(gebruiker => this.studenten = gebruiker);
  }

  openBeheerModal(Id:string, rol: GebruikersRol) {
    this.rol=rol;
    this.gebruikersKoppelen.haalLijstGekoppeldeGebruikers(rol);
    this.gebruikersKoppelen.openModal(Id,rol);
  }
}
