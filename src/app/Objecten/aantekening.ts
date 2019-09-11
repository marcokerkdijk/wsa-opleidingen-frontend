import { Traject } from './traject';

export class Aantekening {
    id: number;
    dag: Date;
    titel: string;
    tekst: string;
    traject: Traject;
}
