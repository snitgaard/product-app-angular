import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id = 1;
  products: Product[];
  apiUrl = 'https://localhost:44364/api/product';
  constructor(private http: HttpClient) {
    this.products = [];
  }
  getProductById(id: number): Observable<any>
  {
    return this.http.get<Product>(this.apiUrl + "/" + id);
  }
  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProduct(product: Product): Observable<any>
  {
    return this.http.post<Product>(this.apiUrl, product);
  }
  updateProduct(product: Product): Observable<Product>
  {
    return this.http.put<Product>(this.apiUrl + "/" + product.id, product);
  }
  deleteProduct(id: number) : Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
