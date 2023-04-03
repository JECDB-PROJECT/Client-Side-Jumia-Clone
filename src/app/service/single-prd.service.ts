import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SinglePrdService {
httpOptions={}
fakeApi:any='https://fakestoreapi.com'
// fakeApi:any=environment.FakeAPIBaseURL
  constructor(private httpClient:HttpClient) { 
    this.httpOptions ={
      headers:new HttpHeaders({'content-type':'application/json'})
    }
  }

//get single fakeApi prd
getSinglePrd(id:number):Observable<any>{
  return this.httpClient.get<any>(`${this.fakeApi}/products/${id}`)
}


}
