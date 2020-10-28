import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  save()
  {
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.productForm.reset();
    this.router.navigateByUrl('/products');
  }

}
