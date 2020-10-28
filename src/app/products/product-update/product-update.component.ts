import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: number;
  productForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    const product = this.productService.getProductById(this.id);
    this.productForm.patchValue({
      name: product.name,
      color: product.color,
      type: product.type,
      price: product.price
    });
  }

  save()
  {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product);
  }

}
