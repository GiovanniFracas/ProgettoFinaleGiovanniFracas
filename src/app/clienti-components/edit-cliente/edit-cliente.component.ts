import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti/clienti.service';



@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {

  editCliente: Clienti = new Clienti;

  constructor(private route: ActivatedRoute, private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClienteById(params['id']).subscribe(res => {
        this.editCliente = res
      })
    })
  }
  saveCliente(editCliente: Clienti) {
    this.clientiService.updateClienti(editCliente).subscribe(data => {
      alert('modifica riuscita')
      this.router.navigate(["clienteDetail", this.editCliente.id])
    })
  }
  back() {
    this.router.navigate(["clienteDetail", this.editCliente.id])
  }

}
