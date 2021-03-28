import { Component, OnInit } from '@angular/core';
import { AlertifyService } from "../services/alertify.service"
import { ProductService } from '../services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService: ProductService) { }
  filterText = ""
  title = "Ürün Listesi"
  products: Product[];

  ngOnInit(): void {
   this.productService.getProducts().subscribe(data=> {
     this.products = data
     console.log('data :>> ', data);
   });
  }
  addToCart(product) {
    this.alertifyService.success(product.name + " eklendi")
  }

}
