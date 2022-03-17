import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti/clienti.service';



@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  showOp:boolean=false
  showLg:boolean=false

  editCliente:Clienti = new Clienti





  constructor(private route: ActivatedRoute, private clientiService:ClientiService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.clientiService.getClienteById(params['id']).subscribe(res =>{
        this.editCliente= res
      })
    })

   }


   saveCliente(editCliente:Clienti) {
     this.clientiService.updateClienti(editCliente).subscribe(data => {
      console.log(
        'Modifica riuscita!',
        'Hai modificato un cliente!',
        'success'
      )
      this.router.navigate(["clienteDetail", this.editCliente.id])
     })
   }


  back(){
    this.router.navigate(["clienteDetail", this.editCliente.id])
  }

}