import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elementos } from '../Models/elementos';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  readonly url = 'https://localhost:44394/api';
  constructor(private httpclient: HttpClient) { }

  //Get All items
  getItems():Observable<Elementos>{
    return this.httpclient.get<Elementos>(this.url+'/items');
  }
}
