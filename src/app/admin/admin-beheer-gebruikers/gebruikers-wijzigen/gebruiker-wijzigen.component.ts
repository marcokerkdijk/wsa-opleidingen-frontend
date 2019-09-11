import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersService } from 'src/app/services/gebruikers.service';

@Component({
  selector: 'wsa-gebruiker-wijzigen',
  templateUrl: './gebruiker-wijzigen.component.html',
  styleUrls: ['./gebruiker-wijzigen.component.scss']
})
export class GebruikerWijzigenComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;

  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private gebruikerService: GebruikersService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalGebruikerOpId(id);
  }

  haalGebruikerOpId(id: number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

  wijzigGebruiker(gebruiker: Gebruiker) {
    this.gebruikerService.wijzigGebruiker(gebruiker, gebruiker.id)
      .subscribe(response => this.router.navigateByUrl('/admin').then(Succes => {
        this.router.navigateByUrl('/admin/admin-beheer-gebruikers')
      }));
  }

}
