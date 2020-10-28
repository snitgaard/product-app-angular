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
        id: this.id++, name: "Barack Obama", color: "yellow", price: 1500, type: "president"
      },
      {
        id: this.id++, name: "Osama bin Laden", color: "brown", price: 15300, type: "arab"
      },
      {
        id: this.id++, name: "Johnny Bravo", color: "yellow", price: 100, type: "sexet"
      }];
  }
  getProductById(id)
  {
    return this.products.find(pet => pet.id == id);
  }
  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiUrl);
  }
  updatePet(product: Product)
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
