import { SelectieFase } from './selectieFase';
import { OpleidingsFase } from './opleidingsfase';

export class Traject {
    id: number;
    naam: string;
    korteOmschrijving: string;
    omschrijving: string;
    zichtbaar: boolean;
    selectieFases:SelectieFase[];
    opleidingsFases: OpleidingsFase[];
}