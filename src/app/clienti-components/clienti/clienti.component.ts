import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})


export class ClientiComponent implements OnInit {
  clienti: Clienti[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  ultimaPagina!:number;
  primaPagina!:number;
  paginacorrente!: number;

  constructor(private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.getPage()
  }


  getPage(){
  this.route.params.subscribe(params => {
        this.clientiService.getPagedClienti(params["page"]).subscribe((clienti:any) => {
          this.clienti = clienti.content
          this.pageNumbers=[];
          this.totalElements = clienti.totalElements
          this.size = clienti.size
          this.numberOfPages = (clienti.totalElements / clienti.size)
        for(let i = 0; i <= this.numberOfPages; i++){
            console.log(i);
            this.pageNumbers.push(i);
          }
        });
        this.paginacorrente = params["page"];
      this.ultimaPagina=params["page"];
      this.ultimaPagina++;
      this.primaPagina=params["page"];
      this.primaPagina--;
      })
  }




 removeCliente(cliente:Clienti) {
   this.clientiService.deleteCliente(cliente).subscribe(res => {
     console.log(res);
     this.getPage();
   });
 }



clienteDetail(cliente:Clienti){
  this.router.navigate(['clienteDetail/', cliente.id])
};

fatture(id:number){
  this.router.navigate(['fatture/clienti/' + id + '/page/' + 0])
}
getColor(n:number):string|null{
  if(n==this.paginacorrente){
    return 'lightblue'
  }
  return null
}


}

