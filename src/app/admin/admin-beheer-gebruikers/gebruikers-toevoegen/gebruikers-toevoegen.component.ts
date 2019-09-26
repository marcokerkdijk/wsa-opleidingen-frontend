import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-gebruikers-toevoegen',
  templateUrl: './gebruikers-toevoegen.component.html',
  styleUrls: ['./gebruikers-toevoegen.component.scss']
})
export class GebruikersToevoegenComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  rolIngelogdeGebruiker: string;

  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private gebruikerService: GebruikersService, private authenticatieservice: AutenticatieService) { }

  ngOnInit() {
    // const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
  }

  toevoegenGebruiker(gebruiker: Gebruiker) {
    console.log(gebruiker);
    this.gebruikerService.gebruikerToevoegen(gebruiker)
      .subscribe(response => this.router.navigateByUrl('/' + this.rolIngelogdeGebruiker).then(Succes => {
        this.router.navigateByUrl('/'+ this.rolIngelogdeGebruiker + '/beheer-gebruikers');
      }));
  }

}