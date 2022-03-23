import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';


import { ClientiService } from 'src/app/services/clienti/clienti.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {

  newCliente: Clienti = new Clienti();

  constructor(private clientiService: ClientiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newCliente = {
      id: 0,
      ragioneSociale: "",
      partitaIva: "",
      tipoCliente: "",
      email: "",
      pec: "",
      telefono: "",
      nomeContatto: "",
      cognomeContatto: "",
      telefonoContatto: "",
      emailContatto: "",
      dataInserimento: "",
      dataUltimoContatto: "",
      fatturatoAnnuale: 0,
      indirizzoSedeOperativa: {
        id: 192,
        via: "",
        civico: 0,
        cap: 0,
        localita: "",
        comune: {
          id: 1,
          nome: "",
          provincia: {
            id: 1,
            nome: "",
            sigla: ""
          }
        }
      },
      indirizzoSedeLegale: {
        id: 191,
        via: "",
        civico: 0,
        cap: 0,
        localita: "",
        comune: {
          id: 1,
          nome: "",
          provincia: {
            id: 1,
            nome: "",
            sigla: ""
          }
        }
      }
    }
  }
  addCliente(newCliente: Clienti) {
    this.clientiService.createCliente(newCliente).subscribe(res =>
      alert('Inserimento riuscito')
    )

  };



}
