import { OpdrachtType } from '../model/opdracht-type.enum';
import { Uitwerking } from './uitwerking';
import { TrajectOnderdeel } from './traject-onderdeel';

export class Opdracht {
    id: number;
    titel: string;
    omschrijving: string;
    zichtbaar: boolean;
    codevoorbeeld: string;
    dag: number;
    trajectOnderdeel: TrajectOnderdeel;
    type: OpdrachtType;
    uitwerkingen: Uitwerking[];
}
