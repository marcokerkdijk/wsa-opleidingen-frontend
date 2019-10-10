import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { AlertService } from 'src/app/_alert';
import { NgxSpinnerService } from 'ngx-spinner';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-gebruikers-toevoegen',
  templateUrl: './gebruikers-toevoegen.component.html',
  styleUrls: ['./gebruikers-toevoegen.component.scss']
})
export class GebruikersToevoegenComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  rolIngelogdeGebruiker: string;
  tekstObject: TekstObject = new TekstObject();

  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private gebruikerService: GebruikersService, private authenticatieservice: AutenticatieService,
    private alertService: AlertService, private spinner: NgxSpinnerService, private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
    this.getTekstObject(14);
  }

  toevoegenGebruiker(gebruiker: Gebruiker) {
    this.spinner.show("laadspinner", {
      type: "ball-square-clockwise-spin",
      color: "#00aeef",
      bdColor: "transparent",
      size: "medium",
    });
    this.gebruikerService.gebruikerToevoegen(gebruiker)
      .subscribe(response => {
        this.router.navigateByUrl('/' + this.rolIngelogdeGebruiker).then(Succes => {
          this.router.navigateByUrl('/' + this.rolIngelogdeGebruiker + '/beheer-gebruikers')
          this.spinner.hide("laadspinner");
        });
      },
        (error) => {
          this.spinner.hide("laadspinner");
          this.alertService.error("Vul alle verplichte velden in alvorens Gebruiker Opslaan te klikken.", "alert-1");
        });
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}