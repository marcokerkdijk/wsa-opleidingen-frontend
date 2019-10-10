import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { BeheerGebruikersComponent } from '../beheer-gebruikers.component';
import { AlertService } from 'src/app/_alert';
import { TrajectService } from 'src/app/services/traject.service';
import { Router } from '@angular/router';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-gebruikers-tabel',
  templateUrl: './gebruikers-tabel.component.html',
  styleUrls: ['./gebruikers-tabel.component.scss']
})
export class GebruikersTabelComponent implements OnInit {
  actieveGebruikers : Gebruiker[];
  teVerwijderenGebruiker : Gebruiker = new Gebruiker;
  zichtbaar: boolean[] = new Array;
  rol :  String;
  
  constructor(private gebruikerService : GebruikersService, private adminBeheerGebruikers:BeheerGebruikersComponent,
              private alertservice: AlertService, private trajectService : TrajectService, private router : Router,
              private authenticatieService : AutenticatieService) { }


  ngOnInit() {
    this.haalActieveGebruikers();
    this.rol = this.authenticatieService.krijgRol();
  }

  haalActieveGebruikers(): void {
    this.gebruikerService.geefActieveGebruikers()
      .subscribe(gebruikers => {
        this.actieveGebruikers = gebruikers;
      },
        (error) => {
          this.alertservice.error("Er zijn geen gebruikers gevonden in de database.", "alert-1");
        }
      );
  }

  sorteerTabel(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("gebruikersTabel");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  filterTabel(input: string, kolomnr: number) {
    if (input != "Alles") {
      var filter, tabel, tr, td, i, txtValue;
      filter = input.toUpperCase();
      tabel = document.getElementById("gebruikersTabel");
      tr = tabel.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[kolomnr];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    } else {
      this.haalActieveGebruikers();
    }
  }

verwijderGebruiker(gebruikerID:number){
    this.gebruikerService.verwijderGebruiker(gebruikerID).subscribe(response => {
    this.router.navigateByUrl('/' + this.rol).then(succes => {this.router.navigateByUrl('/' + this.rol + '/beheer-gebruikers')})
    } )
   
}
maakBooleanLijst(): void {
  this.zichtbaar.concat(false);
}

toggle(index: number): void {
  this.zichtbaar[index] = !this.zichtbaar[index];
  console.log(this.zichtbaar[index]);
}

  
}