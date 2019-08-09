import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';

@Component({
  selector: 'wsa-studenten-tabel',
  templateUrl: './studenten-tabel.component.html',
  styleUrls: ['./studenten-tabel.component.scss']
})
export class StudentenTabelComponent implements OnInit {
  studenten:Gebruiker[];

  constructor(private gebruikerService:GebruikersService) { }

  ngOnInit() {
  }

}
