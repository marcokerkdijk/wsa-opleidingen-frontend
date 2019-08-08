import { Component, OnInit } from '@angular/core';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';

@Component({
  selector: 'wsa-docent-studentenlijst',
  templateUrl: './docent-studentenlijst.component.html',
  styleUrls: ['./docent-studentenlijst.component.scss']
})
export class DocentStudentenlijstComponent implements OnInit {
  studenten: Gebruiker[];

  constructor(private gebruikerService: GebruikersService) { }

  ngOnInit() {
    this.haalStudentenOp();
  }

  haalStudentenOp(): void {
    this.gebruikerService.geefAlleStudenten()
        .subscribe(studenten => this.studenten = studenten);
  }

}
