import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProducthouseComponent } from './components/producthouse/producthouse.component';
import { AppComponent } from '../app.component';



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
export class HousewareModule { }
