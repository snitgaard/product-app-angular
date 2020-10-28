import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';
import {ProductListComponent} from './products/product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'product-add', component: ProductAddComponent},
  { path: 'product-update/:id', component: ProductUpdateComponent},
  { path: '', component: WelcomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
