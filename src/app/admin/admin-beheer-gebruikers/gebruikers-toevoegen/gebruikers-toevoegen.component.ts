import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-gebruikers-toevoegen',
  templateUrl: './gebruikers-toevoegen.component.html',
  styleUrls: ['./gebruikers-toevoegen.component.scss']
})
export class GebruikersToevoegenComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  rolIngelogdeGebruiker: string;

  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private gebruikerService: GebruikersService, private authenticatieservice: AutenticatieService, private alertService: AlertService) { }

  ngOnInit() {
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
  }

  toevoegenGebruiker(gebruiker: Gebruiker) {
    this.gebruikerService.gebruikerToevoegen(gebruiker)
      .subscribe(response => 
        {
          this.router.navigateByUrl('/' + this.rolIngelogdeGebruiker).then(Succes => {
          this.router.navigateByUrl('/'+ this.rolIngelogdeGebruiker + '/beheer-gebruikers')
        });
      },
      (error) => {
        this.alertService.error("Vul alle velden in alvorens op opslaan te klikken.", "alert-1");
      });
  }

}