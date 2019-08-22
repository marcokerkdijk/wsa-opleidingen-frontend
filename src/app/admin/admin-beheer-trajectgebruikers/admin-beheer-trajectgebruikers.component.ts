import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { DTOGebruikerID } from 'src/app/Objecten/gebruikerDTO';

@Component({
  selector: 'wsa-admin-beheer-trajectgebruikers',
  templateUrl: './admin-beheer-trajectgebruikers.component.html',
  styleUrls: ['./admin-beheer-trajectgebruikers.component.scss']
})
export class AdminBeheerTrajectgebruikersComponent implements OnInit {
  traject: Traject = new Traject;
  studentenlijst: Gebruiker[] = new Array;
  gebruikerIDLijst: DTOGebruikerID[] = new Array;

  constructor(private activeRouter: ActivatedRoute, private trajectService:TrajectService,
              private gebruikersService: GebruikersService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
    this.haalStudentenOp(id);
  }

  haalTrajectOp(traject_id) {
    this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

  haalStudentenOp(traject_id) {
    this.gebruikersService.geefStudentenVanTrajectEnOngekoppelde(traject_id).subscribe(studenten => {
      this.studentenlijst = studenten
      this.maakStudentArray();
    });
  }

  maakStudentArray(): void {
    for (let student of this.studentenlijst) {
      if (student.gekoppeld === true) {
        let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
        gebruikerDTO.id = student.id;
  
        this.gebruikerIDLijst.push(gebruikerDTO);
      }
    }

    console.log(this.gebruikerIDLijst);
  }

  wijzigStudentArray(gebruiker: Gebruiker, check: boolean): void {
    if (check === false && gebruiker.gekoppeld === false) {
      let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
      gebruikerDTO.id = gebruiker.id;

      this.gebruikerIDLijst.push(gebruikerDTO);
    }

    if (check === true) {
      let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
      gebruikerDTO.id = gebruiker.id;

      // this.gebruikerIDLijst.filter(gebruiker => gebruiker.id !== gebruikerDTO.id);
      let index: number;

      for (let i = 1; i < this.gebruikerIDLijst.length; i++) {
        if (this.gebruikerIDLijst[i].id === gebruikerDTO.id) {
          index = i;
        }
      }

      if (index !== -1) {
        this.gebruikerIDLijst.splice(index, 1);
      }
    }

    console.log(this.gebruikerIDLijst);
  }
}
