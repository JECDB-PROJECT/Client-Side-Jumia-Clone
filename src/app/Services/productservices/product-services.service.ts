import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Iuser } from '../../Models/iuser';
import { ToastrService } from 'ngx-toastr';
import { LocalStorgeService } from '../localStorge/local-storge.service';
import { Router } from '@angular/router';
import { Icart } from 'src/app/Models/icart';
import { Iproduct } from 'src/app/Models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
   loginUserId:string;

   handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  httpOptions = {};


  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    public router: Router,
    private storageService: LocalStorgeService
  ) {
    this.loginUserId="6425633cf68f40eb571fff5f";
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   }

   getUserCart(userID: any): Observable<Icart> {
    return this.http.get<Icart>(`${environment.jDBUrl}/api/cart/${this.loginUserId}`, this.httpOptions).pipe(
      catchError(this.handleError)
    )

  }

  addUserCart(cart : any): Observable<Icart> {
    return this.http.post<Icart>(`${environment.jDBUrl}/api/cart/addToCart`,cart, this.httpOptions).pipe(
      catchError(this.handleError)
    )

  }

  removeSpecificCart(userID: any,productId:any): Observable<Icart> {
    return this.http.post<Icart>(`${environment.jDBUrl}/api/cart/${productId}`,userID, this.httpOptions).pipe(
      catchError(this.handleError)
    )

  }



  GetProductsBySubCate(subcate: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      environment.jDBUrl + '/api/products/subcat/' + subcate, this.httpOptions).pipe(
        catchError(this.handleError)
      )
  
  }
  
  getProductsByCategory(cate: string) {
    return this.http.get<Iproduct[]>(
      environment.jDBUrl + '/api/products/cat/' + cate, this.httpOptions).pipe(
        catchError(this.handleError)
      )
  
  }



}
