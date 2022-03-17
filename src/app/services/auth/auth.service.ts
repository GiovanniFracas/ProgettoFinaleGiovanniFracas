import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from 'src/app/classes/auth/login-response';
import { AdminLogin } from 'src/app/classes/auth/admin-login';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/classes/auth/sign-up';
import { SignUpResponse } from 'src/app/classes/auth/sign-upResponse';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  nuovoUser = { username: '', email: '', password: '', role: [] };
  myApiUrl: string = environment.APIurl;
  currentUser!: LoginResponse;
  ifLogged: boolean = false;
  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
  }

  login(loginPayload: AdminLogin) {
    return this.http.post<LoginResponse>(environment.APIurl + '/api/auth/login', loginPayload)
  }



  signup(nuovoUser: SignUp) {
    console.log(nuovoUser);

    return this.http.post<LoginResponse>(this.myApiUrl + '/api/auth/signup', nuovoUser);
  }


  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currentUser')
    this.router.navigate([''])
  }

  isLogged() {
    let token: string | null;
    token = localStorage.getItem('accessToken');
    if (token == null) {
      this._isAuthenticatedSubject.next(false);
    }
    else(this._isAuthenticatedSubject.next(true));
    return this._isAuthenticatedSubject;
  }
}

