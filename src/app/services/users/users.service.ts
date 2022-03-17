import { HttpClient } from '@angular/common/http';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/classes/auth/login-response';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) { }


  getClienti(){
    return this.http.get<any>(environment.APIurl + '/api/users')
  }
  getUtentiByPage(page:number) {
    return this.http.get<LoginResponse[]>(environment.APIurl + `/api/users?page=${page}&size=20&sort=id,ASC`)
  }
}
