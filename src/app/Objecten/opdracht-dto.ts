import { TrajectOnderdeel } from './traject-onderdeel';
import { OpdrachtType } from '../model/opdracht-type.enum';

export class OpdrachtDTO {
    id: number;
    titel: string;
    omschrijving: string;
    zichtbaar: boolean;
    codevoorbeeld: string;
    dag: number;
    trajectOnderdeel: TrajectOnderdeel;
    type: OpdrachtType;
}
