import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public authservice:AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authservice.logout()
  }
  isLogged(): boolean{
    let ris!:any;
    this.authservice.isLogged().subscribe(res=>{
      ris=res;
    });return ris
  }

}
