import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(environment.APIurl +'/api/clienti')
  }

  getPagedClienti(page: number){
    return this.http.get<Clienti[]>(environment.APIurl +`/api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  deleteCliente(cliente:Clienti){
    return this.http.delete(environment.APIurl +'/api/clienti/' + cliente.id)
  }

  createCliente(cliente:Clienti) {
    return this.http.post(environment.APIurl + '/api/clienti',cliente)
  }

  getClienteById(id:number) {
    return this.http.get<Clienti>(environment.APIurl + '/api/clienti/' + id)
  }

  getClienteIdperFattura(id:number) {
    return this.http.get<Fatture>(environment.APIurl + '/api/clienti/' + id)

  }

  updateClienti(clienti:Clienti){
    return this.http.put<Clienti>(environment.APIurl+ '/api/clienti/' + clienti.id, clienti)
  }


}
