import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/rol.enum';
import { GebruikersRol } from 'src/app/model/GebruikersRol';
import { ModalService } from 'src/app/services/modal.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';

@Component({
  selector: 'wsa-koppel-docent',
  templateUrl: './koppel-docent.component.html',
  styleUrls: ['./koppel-docent.component.scss']
})
export class KoppelDocentComponent implements OnInit {
  gebruikers:Gebruiker[];

  constructor(private modalService:ModalService, private gebruikerService: GebruikersService) { }

  ngOnInit() {
  }

  openModal(id: string, rol:GebruikersRol) {
    this.haalGebruikerOp(rol);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  haalGebruikerOp(rol){
    this.gebruikerService.gebruikerOpvragenRol(rol)
    .subscribe(opgehaaldeGebruikers => this.gebruikers = opgehaaldeGebruikers);
  }

}
