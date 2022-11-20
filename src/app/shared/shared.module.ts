import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormsModule
  ]
})
export class SharedModule { }
