import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { AlertifyService } from "../services/alertify.service"
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  filterText = ""
  title = "Ürün Listesi"
  products: Product[];
  baseUrl = "http://localhost:3000/products"

  ngOnInit(): void {
    this.http.get<Product[]>(this.baseUrl).subscribe(data => {
      this.products = data;
    })
  }
  addToCart(product) {
    this.alertifyService.success(product.name + " eklendi")
  }

}
