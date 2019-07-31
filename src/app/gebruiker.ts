import {Rol} from './rol.enum';

export class Gebruiker {
  id: number;
  wachtwoord: string;
  emailadres: string;
  voornaam: string;
  tussenvoegsel: string;
  achternaam: string;
  rol: Rol;
  actief: boolean;
}
