import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[] = []
  cartProducts: any[] = []
  constructor(private service: ProductsService) { }


  ngOnInit(): void {
    this.getproducts()
  }



  getproducts() {
    return this.service.getallproducts().subscribe((res: any) => {
      this.products = res;

    })
  }

  addtocart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.productName == event.item.productName)
      if (exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

}
