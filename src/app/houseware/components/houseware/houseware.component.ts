import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/sevices/products.service'

@Component({
  selector: 'app-houseware',
  templateUrl: './houseware.component.html',
  styleUrls: ['./houseware.component.css']
})
export class HousewareComponent implements OnInit {
  
  productsF:any[]=[];
  //JSON: any;
  cartProducts:any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getCategoryFilter()
  }
 
  getCategoryFilter(){
    return this.service.getallproducts().subscribe((res:any) => {
      this.productsF=res.filter((b:any) => b.category==('أدوات منزليه'));
      console.log(this.productsF);

    })
  }
 
  addtocart2(event:any) {
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
