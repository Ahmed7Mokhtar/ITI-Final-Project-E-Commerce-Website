import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { AboutComponent } from './about/about.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { checkoutGaurd } from './checkout/checkoutGaurdService';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactModule } from './contact-us/contact.module';
import { ElectronicsComponent } from './electronics/components/electronics/electronics.component';
import { HousewareComponent } from './houseware/components/houseware/houseware.component';
import { LoginComponent } from './login2/login.component';
import { MattressComponent } from './mattress/components/mattress/mattress.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CategioryComponent } from './products/components/categiory/categiory.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { SalesPolicyComponent } from './sales-policy/sales-policy.component';
import { SignUpComponent } from './sign-up2/sign-up.component';


const routes: Routes = [
  { path: "products", component: AllProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "cart/checkout", component: CheckoutComponent, canActivate: [checkoutGaurd] },
  { path: "details/:id", component: ProductDetailsComponent },
  { path: "category", component: CategioryComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "login", component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'condition', component: ConditionsComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'commonQuestion', component: CommonQuestionsComponent },
  { path: 'salesPolicy', component: SalesPolicyComponent },
  { path: "electronics", component: ElectronicsComponent },
  { path: "houseware", component: HousewareComponent },
  { path: "mattress", component: MattressComponent },

  { path: "", component: CategioryComponent },
  { path: "**", redirectTo: "products", pathMatch: "full" }
  // {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
