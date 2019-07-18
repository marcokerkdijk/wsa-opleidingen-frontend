import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';

@Component({
  selector: 'wsa-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  gebruiker: JwtToken;

  constructor(private authenticatieService: AutenticatieService) { }

  ngOnInit() {

  }
}
