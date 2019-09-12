import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-gebruiker-wijzigen',
  templateUrl: './gebruiker-wijzigen.component.html',
  styleUrls: ['./gebruiker-wijzigen.component.scss']
})
export class GebruikerWijzigenComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  rolIngelogdeGebruiker: string;

  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private gebruikerService: GebruikersService, private authenticatieservice: AutenticatieService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalGebruikerOpId(id);
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
  }

  haalGebruikerOpId(id: number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

  wijzigGebruiker(gebruiker: Gebruiker) {
    this.gebruikerService.wijzigGebruiker(gebruiker, gebruiker.id)
      .subscribe(response => this.router.navigateByUrl('/' + this.rolIngelogdeGebruiker).then(Succes => {
        this.router.navigateByUrl('/'+ this.rolIngelogdeGebruiker + '/beheer-gebruikers');
      }));
  }

}
