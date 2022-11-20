import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/sevices/products.service'

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.css']
})
export class MattressComponent implements OnInit {

   
  productsFFF:any[]=[];
  //JSON: any;
  cartProducts:any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getCategoryFilter()
  }
 
  getCategoryFilter(){
    return this.service.getallproducts().subscribe((res:any) => {
      this.productsFFF=res.filter((b:any) => b.category==('مفروشات'));
      console.log(this.productsFFF);

    })
  }

  addtocart3(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.productName == event.item.productName)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }

}
