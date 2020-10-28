import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    NavbarComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
