import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursales } from '../Models/sucursales';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  readonly url = 'https://localhost:44394/api';
  constructor(private httpclient: HttpClient) { }

  //Get All users
  getBranches():Observable<Sucursales>{
    return this.httpclient.get<Sucursales>(this.url+'/branchoffices');
  }
}
