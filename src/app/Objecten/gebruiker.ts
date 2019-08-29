import {Rol} from '../rol.enum';
import { Traject } from './traject';
import { Uitwerking } from './uitwerking';

export class Gebruiker {
  id: number;
  wachtwoord: string;
  emailadres: string;
  voornaam: string;
  tussenvoegsel: string;
  achternaam: string;
  rol: Rol;
  actief: boolean;
  trajecten:Traject[];
  gekoppeld:boolean;
  aanTraject: boolean;
  uitwerkingen: Uitwerking[];
}
