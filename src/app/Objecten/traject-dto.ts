import { TrajectOnderdeel } from './traject-onderdeel';

export class TrajectDTO {
    id: number;
    naam: string;
    korteOmschrijving: string;
    omschrijving: string;
    zichtbaar: boolean;
    trajectOnderdelen: TrajectOnderdeel[];
}
