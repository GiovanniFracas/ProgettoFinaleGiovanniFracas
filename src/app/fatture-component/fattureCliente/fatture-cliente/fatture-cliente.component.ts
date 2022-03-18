import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { Fatture } from 'src/app/classes/fatture/fatture';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {
  fattureFinet: any;
  fatturaCliente!: any[];
  id!: number;


  fatture: Fatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  paginacorrente: any;
  ultimaPagina: any;
  primaPagina: any;

  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getUtentiPage();
  }

  getUtentiPage(){
    this.route.params.subscribe(res => {
      this.fattureService.getFatturaByCliente(res['id'],res['page']).subscribe((c: any) =>{
        this.pageNumbers=[];
        this.id = res['id'];

        this.fatturaCliente = c.content
        this.totalElements = c.totalElements
        this.numberOfPages = (c.totalElements / c.size)
      for(let i = 0; i <= this.numberOfPages ; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
      });
      this.paginacorrente = res["page"];
      this.ultimaPagina=res["page"];
      this.ultimaPagina++;
      this.primaPagina=res["page"];
      this.primaPagina--;
    })
  }
  removeFattura(fatture: Fatture) {
    this.fattureService.deleteFattura(fatture).subscribe(res => {
      this.getUtentiPage();
      console.log(res);

    });
  }

  fattureDetail(fatture: Fatture) {
    this.router.navigate(['fattureDetail/', fatture.id])
  }
  getColor(n:number):string|null{
    if(n==this.paginacorrente){
      return 'lightblue'
    }
    return null
  }
  getRosso(nome: string){
    if(nome=='PAGATA'){
      return 'lightblue'
    }
    return 'pink'

  }
}
