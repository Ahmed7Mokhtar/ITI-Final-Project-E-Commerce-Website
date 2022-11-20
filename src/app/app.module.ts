import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CartComponent } from './carts/component/cart/cart.component';
import { ProductsModule } from './products/products.module';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactModule } from './contact-us/contact.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login2/login.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { SalesPolicyComponent } from './sales-policy/sales-policy.component';
//import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthcomponentComponent } from './auth/authcomponent/authcomponent.component';
import { SignUpComponent } from './sign-up2/sign-up.component';
import { checkoutGaurd } from './checkout/checkoutGaurdService';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ElectronicsComponent } from './electronics/components/electronics/electronics.component';
import { MattressComponent } from './mattress/components/mattress/mattress.component';
import { ProductmattressComponent } from './mattress/components/productmattress/productmattress.component';
import { ProductelectronicComponent } from './electronics/components/productelectronic/productelectronic.component';

// import { AboutComponent } from './about/about.component';
// import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    ConditionsComponent,
    PrivacyPolicyComponent,
    CommonQuestionsComponent,
    SalesPolicyComponent,
    AuthcomponentComponent,
    SignUpComponent,
    CheckoutComponent,
    ElectronicsComponent,
    MattressComponent,
    ProductmattressComponent,
    ProductelectronicComponent



    // AboutComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    AboutModule,
    ContactModule,
    FormsModule,
    CartsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    //NgxNavbarModule,
    BrowserAnimationsModule
  ],

  providers: [checkoutGaurd],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
