import { TrajectOnderdeel } from './traject-onderdeel';
import { Gebruiker } from './gebruiker';
import { Aantekening } from './aantekening';

export class Traject {
    id: number;
    naam: string;
    korteOmschrijving: string;
    omschrijving: string;
    zichtbaar: boolean;
    trajectOnderdelen: TrajectOnderdeel[];
    gebruikers: Gebruiker[];
    aantekeningen: Aantekening[];
}