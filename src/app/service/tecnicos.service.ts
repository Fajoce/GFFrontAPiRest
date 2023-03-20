import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technicals } from '../Models/tecnicos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly url = 'https://localhost:44394/api';

  constructor(private httpclient: HttpClient) { }

  //Get All users
  getUsers():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/Technicals');
  }
  //Get users By id
  getUsersById(id:number):Observable<Technicals>{
    return this.httpclient.get<Technicals>(this.url+'/Technicals/'+id);
  }

  //create users
  addUsers(data:any){
    return this.httpclient.post(this.url+'/Technicals',data);
  }
  //update user by ID
  updateUsers(id:number,data:any){
    return this.httpclient.put(this.url + `/Technicals/${id}`,data);
  }
//Delete user by ID
  deleteTechnical(id:string){
    return this.httpclient.delete(this.url+`/Technicals/${id}`);
  }  
}
