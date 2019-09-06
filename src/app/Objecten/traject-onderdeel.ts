import { FaseType } from '../model/fase-type.enum';
import { Opdracht } from './opdracht';
import { Traject } from './traject';

export class TrajectOnderdeel {
    id: number;
    naam: string;
    omschrijving: string;
    startdatum: string;
    tijdstip: string;
    fase: FaseType;
    opdrachten: Opdracht[];
    traject: Traject;
    index: number;
}
