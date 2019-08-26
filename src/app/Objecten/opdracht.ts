import { OpdrachtType } from '../model/opdracht-type.enum';
import { Traject } from './traject';
import { FaseType } from '../model/fase-type.enum';

export class Opdracht {
    id: number;
    titel: string;
    omschrijving: string;
    zichtbaar: boolean;
    codevoorbeeld: string;
    dag: number;
    type: OpdrachtType;
    fase: FaseType;
    traject: Traject;
}
