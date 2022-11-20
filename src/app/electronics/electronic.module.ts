import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ProductelectronicComponent } from './components/productelectronic/productelectronic.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ]
})
export class ElectronicModule { }
