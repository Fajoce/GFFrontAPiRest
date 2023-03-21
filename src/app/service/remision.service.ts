import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Remision } from '../Models/remision';

@Injectable({
  providedIn: 'root'
})
export class RemisionService {
  readonly url = 'https://localhost:44394/api';

  constructor(private httpclient: HttpClient) { }

  //Get All remissions
  getRemissions():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/remissions');
  }
   //Get Items Resume 
   getResume():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/remissions/resume');
  }
  //Get remission By id
  getRemissionsById(id:number):Observable<Remision>{
    return this.httpclient.get<Remision>(this.url+'/remissions/'+id);
  }

  //create remission
  addRemissions(data:any){
    return this.httpclient.post(this.url+'/remissions',data);
  }
  //update remission by ID
  updateRemissions(id:number,data:any){
    return this.httpclient.put(this.url + `/remissions/${id}`,data);
  }
//Delete remission by ID
  deleteRemissions(id:number){
    return this.httpclient.delete(this.url+`/remissions/${id}`);
  }

}
