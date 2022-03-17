import { Clienti } from "../clienti/clienti";
import { StatoFattura } from "../stato-fattura/stato-fattura";

export class Fatture {
    id!:number;
    data!:string;
    numero!:number;
    anno!:number;
    importo!:number;
    stato!:StatoFattura;
    cliente!:Clienti;
}
