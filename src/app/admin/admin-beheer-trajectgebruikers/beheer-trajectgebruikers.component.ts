import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { DTOGebruikerID } from 'src/app/Objecten/gebruikerDTO';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-beheer-trajectgebruikers',
  templateUrl: './beheer-trajectgebruikers.component.html',
  styleUrls: ['./beheer-trajectgebruikers.component.scss']
})
export class BeheerTrajectgebruikersComponent implements OnInit {
  traject: Traject = new Traject;
  studentenlijst: Gebruiker[] = new Array;
  gebruikerIDLijst: DTOGebruikerID[] = new Array;
  docentenlijst: Gebruiker[] = new Array;
  docentIDLijst: DTOGebruikerID[] = new Array;

  constructor(private activeRouter: ActivatedRoute, private trajectService:TrajectService,
              private gebruikersService: GebruikersService, private alertService: AlertService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
    this.haalStudentenOp(id);
    this.haalDocentenOp();
  }

  haalTrajectOp(traject_id) {
    this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

  haalStudentenOp(traject_id) {
    this.gebruikersService.geefStudentenVanTrajectEnOngekoppelde(traject_id).subscribe(studenten => {
      this.studentenlijst = studenten;
      this.maakStudentArray();
    },
    (error) => {
      this.alertService.error("Er zijn geen studenten zonder traject.", "alert-1");
    });
  }

  haalDocentenOp() {
    this.gebruikersService.gebruikerOpvragenRol("DOCENT").subscribe(docenten => {
      this.docentenlijst = docenten;

      for (let docent of this.docentenlijst) {
        if (docent.trajecten.length == 0) {
          docent.aanTraject = false;
        }
        else {
          docent.aanTraject = this.gekoppeldAanTrajectCheck(docent);
        }
      }

      this.maakDocentArray();
    });
  }

  gekoppeldAanTrajectCheck(docent: Gebruiker): boolean {
    for (let traject of docent.trajecten) {
      if (traject.id === this.traject.id) {
        return true;
      }
    }
    return false;
  }

  maakStudentArray(): void {
    for (let student of this.studentenlijst) {
      if (student.gekoppeld === true) {
        let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
        gebruikerDTO.id = student.id;
  
        this.gebruikerIDLijst.push(gebruikerDTO);
      }
    }
  }

  maakDocentArray(): void {
    for (let docent of this.docentenlijst) {
      if (docent.aanTraject) {
        let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
        gebruikerDTO.id = docent.id;
  
        this.gebruikerIDLijst.push(gebruikerDTO);
      }
    }
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
    this.opslaanGebruikers(this.gebruikerIDLijst);
  }

  wijzigDocentArray(gebruiker: Gebruiker, check: boolean): void {
    if (check === false) {
      let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
      gebruikerDTO.id = gebruiker.id;

      this.gebruikerIDLijst.push(gebruikerDTO);
    }

    if (check === true) {
      let gebruikerDTO: DTOGebruikerID = new DTOGebruikerID;
      gebruikerDTO.id = gebruiker.id;

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
    this.opslaanGebruikers(this.gebruikerIDLijst);
  }

  opslaanGebruikers(gebruikerIDs: DTOGebruikerID[]): void {
    this.trajectService.koppelTrajectAanGebruiker(gebruikerIDs, this.traject.id).subscribe();
  }
}
