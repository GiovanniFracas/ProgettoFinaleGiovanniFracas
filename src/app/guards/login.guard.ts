import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private authService:AuthService){}


  canActivate() {
    if(this.authService.isLogged()){
      //this.authService.ifLogged = true
      return true
    }
    //this.authService.ifLogged = false
    return false

  }
  
}
