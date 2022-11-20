import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MainDesignComponent } from './components/main-design/main-design.component';
import { CategioryComponent as CategoryComponent } from './components/categiory/categiory.component';
import { CoverComponent } from './components/cover/cover.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HousewareModule } from '../houseware/houseware.module';
import { HousewareComponent } from '../houseware/components/houseware/houseware.component';
import { ProducthouseComponent } from '../houseware/components/producthouse/producthouse.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    MainDesignComponent,
    CategoryComponent,
    CoverComponent,
    ProductComponent,
    HousewareComponent,
    ProducthouseComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HousewareModule
  ],
  exports:[
    AllProductsComponent,
    MainDesignComponent,
    CategoryComponent,
    CoverComponent,
    FormsModule,
    
  ],
})
export class ProductsModule { }
