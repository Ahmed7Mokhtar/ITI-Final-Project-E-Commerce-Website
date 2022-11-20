import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getallproducts() {
    return this.http.get('http://rooneya-001-site1.htempurl.com/ProductsWithImages/GetAllProducts')


  }

  getProductById(id: any) {

    //return this.http.get(environment.baseApi +'ProductsWithImages/GetAllProducts/'+productName )
    return this.http.get('http://rooneya-001-site1.htempurl.com/ProductsWithImages/GetOneProduct/' + id)

  }
}
