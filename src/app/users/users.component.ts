import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { LoginResponse } from 'src/app/classes/auth/login-response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  utentiFinti: any;
  utentiVeri!: Array<LoginResponse>;
  totalElements: any;
  numberOfPages!: number;
  pageNumbers: any[]=[];
  ultimaPagina!:number;
  primaPagina!:number;
paginacorrente!: number;



  constructor(private userSrv: UsersService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getUtentiPage();
  }
  getUtenti() {
    this.userSrv.getClienti().subscribe(res => {
      console.log(res);
      this.utentiVeri = res.content;
    })
  }
  getUtentiPage(){
    this.route.params.subscribe(params => {
      this.userSrv.getUtentiByPage(params["page"]).subscribe((utenti:any) => {
        this.pageNumbers=[];
        this.utentiVeri = utenti.content
        this.totalElements = utenti.totalElements
        this.numberOfPages = (utenti.totalElements / utenti.size)
      for(let i = 0; i <= this.numberOfPages ; i++){
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
  getColor(n:number):string|null{
    if(n==this.paginacorrente){
      return 'lightblue'
    }
    return null
  }

}
