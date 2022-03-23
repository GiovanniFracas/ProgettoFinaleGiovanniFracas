import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';


@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  pagina!: number | null;
  fatture: Fatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  multiplier = 0;

  prossimaPagina!: number;
  prevPagina!: number;

  paginacorrente!: number;
  differenzaPagine!: number;

  veraPagina!: number;
  paginaPiuDieci!: number;

  constructor(private fattureService: FattureService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getPage();
  }


  /* get page. Quando sottraendo 10 al numero di pagina corrente se ottengo un numero positivo lo sommo ai valori nell'array pageNumbers per ottenere la vera pagina */
  getPage() {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureByPage(params["page"]).subscribe((fatture: any) => {
        this.pageNumbers = [];
        this.multiplier = 0
        this.fatture = fatture.content
        this.totalElements = fatture.totalElements
        this.numberOfPages = (fatture.totalElements / fatture.size)
        for (let i = 0; i <= this.numberOfPages && i <= 9; i++) {
          console.log(i);
          this.pageNumbers.push(i);
        }
        this.paginacorrente = params["page"];
        this.paginaPiuDieci = Number(this.paginacorrente) + 10;
        this.differenzaPagine = this.paginacorrente - 8;
        if (this.differenzaPagine >= 0) {
          this.multiplier = this.multiplier + this.differenzaPagine;
        }
      });

      this.prossimaPagina = params["page"];
      this.prossimaPagina++;
      this.prevPagina = params["page"];
      this.prevPagina--;

    })
  }

  removeFattura(fatture: Fatture) {
    this.fattureService.deleteFattura(fatture).subscribe(res => {
      this.getPage();
    });
  }

  fattureDetail(fatture: Fatture) {
    this.router.navigate(['fattureDetail/', fatture.id])
  }
  getByCliente(id: number) {
    this.router.navigate(['fattureDetail/', id])
  }
  cambiaPagina(p: number | null) {
    this.router.navigate(['fatture/page/', p])
    this.pageNumbers = [];
    this.multiplier = 0
    this.pagina = null
  }

  /* ritorna il colore se il numero è lo stesso della pagina corrente */
  getColor(n: number): string | null {
    if (n == this.paginacorrente) {
      return 'lightblue'
    }
    return null
  }

  /* funzione per capire se la fattura è stata pagata */
  getRosso(nome: string) {
    if (nome == 'PAGATA') {
      return 'lightblue'
    }
    return 'pink'

  }

}
