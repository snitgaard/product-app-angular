import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/model/Product';
import {ProductService} from '../../shared/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit():{
    this.refresh;
  }

  refresh()
  {
    this.productService.getProducts().subscribe(listOfProducts => {
      this.products = listOfProducts;
    })
  }
  delete (id: number)
  {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        console.log('Deleted Product: ' + message);
        this.refresh()
      });
  }
}
