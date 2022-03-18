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

  showOp:boolean=false
  showLg:boolean=false

  newCliente:Clienti = new Clienti();



  constructor(private clientiService:ClientiService ,private route : ActivatedRoute) { }

  ngOnInit(): void {

  }


  //DISPLAY ELEMENTI
  showSedeOp(){
    if(this.showOp == false)
      this.showOp = true
    else
      this.showOp = false
  }

  showSedeLg(){
    if(this.showLg == false)
      this.showLg = true
    else
      this.showLg = false
  }




  addCliente(newCliente:Clienti) {

    //SEDE OPERATIVA
   /* this.newProvincia = this.newSedeOp.provincia
    this.newComune = this.newSedeOp.comune
    newCliente.indirizzoSedeOperativa= this.newSedeOp
    //SEDE LEGALE
    this.newProvincia = this.newSedeLg.provincia
    this.newComune = this.newSedeLg.comune
    newCliente.indirizzoSedeLegale= this.newSedeLg
    console.log(newCliente);*/

    this.clientiService.createCliente(newCliente).subscribe(res => console.log(
      'Inserimento riuscito!',
      'Hai aggiunto un nuovo cliente!',
      'success'
    ))
    this.newCliente = new Clienti
  };



}
