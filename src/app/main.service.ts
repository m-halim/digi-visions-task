import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    public httpClient: HttpClient
  ) { }
 
  getProducts(): Observable<any>{
    return this.httpClient.get(`https://fakestoreapi.com/products?limit=10`)
  }

  getProductDetails(Product_ID){
    return this.httpClient.get(`https://fakestoreapi.com/products/${Product_ID}`)
  }

  addProduct(product){
    return this.httpClient.post(`https://fakestoreapi.com/products`, product)
  }
}
