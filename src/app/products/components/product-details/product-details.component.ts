import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../sevices/products.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any
  data: any = {}

  addButton: boolean = false;
  amount: number = 0;
  @Input() data2: any = {}
  @Output() item = new EventEmitter();
  cartProducts: any[] = []


  constructor(private route: ActivatedRoute, private service: ProductsService,) {

    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.service.getProductById(this.id).subscribe(res => {
      this.data = res
    })
  }


  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
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
