export class Clienti {
        id!: number;
        ragioneSociale!: string;
        partitaIva!: string;
        tipoCliente!: string;
        email!: string;
        pec!: string;
        telefono!: string;
        nomeContatto!: string;
        cognomeContatto!: string;
        telefonoContatto!: string;
        emailContatto!: string;
        dataInserimento!: string;
        dataUltimoContatto!: string;
        fatturatoAnnuale!: number;
        indirizzoSedeOperativa!: {
          id: 192,
          via: string,
          civico: number,
          cap: number,
          localita: string,
          comune: {
              id: 1,
              nome: string,
              provincia: {
                  id: 1,
                  nome:string,
                  sigla:string
              }
          }
      };
    indirizzoSedeLegale!: {
          id: 191,
          via: string,
          civico: number,
          cap: number,
          localita: string,
          comune: {
              id: 1,
              nome: string,
              provincia: {
                  id: 1,
                  nome: string,
                  sigla: string
              }
          }
      }

    }
