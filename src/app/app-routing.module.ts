import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: '', component: ProductListComponent},
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
