import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs"
import { Product } from '../product/product';
import { tap, catchError } from "rxjs/operators"

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:3000/products"

  getProducts(categoryId): Observable<Product[]> {
    // alert(categoryId)
    let newPath = this.baseUrl;
    if(categoryId) {
      newPath = newPath + "?categoryId"+categoryId
    }


    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata olustu" + err.error.message
    } else {
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage)
  }
}
