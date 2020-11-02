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
  apiUrl: 'https://localhost:44364/api/product';
  constructor(private http: HttpClient) {
    this.products = [
      {
        id: this.id++, name: 'Johnny Bravo', color: 'Yellow',
        price: 1000, type: 'Dog'
      },
      {
        id: this.id++, name: 'Obama', color: 'Hmm',
        price: 15000, type: 'Cat'
      }];
  }
  getProductById(id)
  {
    return this.products.find(product => product.id === id);
  }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>('https://localhost:44364/api/product');
  }

  addProduct(product: Product)
  {
    product.id = this.id++;
    this.products.push(product);
  }
  updateProduct(product: Product)
  {
    const productToUpdate = this.products.find(p => product.id === p.id);
    const index = this.products.indexOf(productToUpdate);
    this.products[index] = product;
  }
  deleteProduct(id: number) : Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
