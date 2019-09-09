import { Opdracht } from './opdracht';
import { Gebruiker } from './gebruiker';

export class Uitwerking {
    id: number;
    resultaat: string;
    inleverTijdstip: Date;
    opdracht: Opdracht;
    gebruiker: Gebruiker;
    opmerking: string;
    gelezen: boolean;
}
