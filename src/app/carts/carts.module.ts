import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
//import { CartComponent } from './component/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
    
  ]
})
export class CartsModule { }
