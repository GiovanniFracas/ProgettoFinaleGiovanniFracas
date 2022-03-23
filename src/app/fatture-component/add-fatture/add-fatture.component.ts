import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { StatoFattura } from 'src/app/classes/stato-fattura/stato-fattura';

import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { Location } from '@angular/common'



@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.scss']
})
export class AddFattureComponent implements OnInit {

  statoFattura: StatoFattura[] = []
  newFattura: Fatture = new Fatture

  clientiFattura: Clienti = new Clienti

  constructor(private fattureService: FattureService, private clientiService: ClientiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(d => {
      this.clientiService.getClienteById(d['id']).subscribe((res: any) => {
        this.clientiFattura = res;
        console.log(this.clientiFattura);

      })
    })
    this.fattureService.getStatoFattura().subscribe((statoFattura: any) => {
      this.statoFattura = statoFattura.content
      console.log(this.statoFattura);
    })
  }

  saveFattura(newFattura: Fatture) {

    newFattura.cliente = this.clientiFattura

    this.fattureService.createFattura(newFattura).subscribe(res =>
      alert(
        'Inserimento riuscito!'
      ))
    this.newFattura = new Fatture
  }
  indietro() {
    this.location.back();
  }

}
