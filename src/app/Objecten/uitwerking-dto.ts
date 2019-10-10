import { Opdracht } from './opdracht';
import { Gebruiker } from './gebruiker';
import { UitwerkingType } from '../model/uitwerking-type.enum';

export class UitwerkingDTO {
    id: number;
    resultaat: string;
    inleverTijdstip: Date;
    opdracht: Opdracht;
    gebruiker: Gebruiker;
    opmerking: string;
    gelezen: boolean;
    type: UitwerkingType;
    documentBytes: number[];
    byteString: string;
}
