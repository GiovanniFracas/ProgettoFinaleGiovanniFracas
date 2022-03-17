import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fatture } from 'src/app/classes/fatture/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }


  getFattureByPage(page:number) {
    return this.http.get<Fatture[]>(environment.APIurl + `/api/fatture?page=${page}&size=20&sort=id,ASC`)
  }

  getFatturaById(id:number) {
    return this.http.get<Fatture>(environment.APIurl + '/api/fatture/' + id)
  }

  deleteFattura(fatture:Fatture){
    return this.http.delete(environment.APIurl +'/api/fatture/' + fatture.id)
  }

  updateFatture(fatture:Fatture){
    return this.http.put<Fatture>(environment.APIurl+ '/api/fatture/' + fatture.id, fatture)
  }

  getFatturaByCliente(id:number,page:number){
    return this.http.get<Fatture[]>(environment.APIurl + `/api/fatture/cliente/${id}?page=${page}&size=20&sort=id,ASC`)
  }

  createFattura(fatture:Fatture) {
    return this.http.post(environment.APIurl + '/api/fatture', fatture)
  }

  getStatoFattura(){
    return this.http.get(environment.APIurl +'/api/statifattura')
  }


}
