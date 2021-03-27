import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  filterText = ""
  title = "Ürün Listesi"
  products: Product[] = [
    { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "monster", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 2, name: "mouse", price: 25, categoryId: 2, description: "none", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "monster", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 2, name: "mouse", price: 25, categoryId: 2, description: "none", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "monster", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 2, name: "mouse", price: 25, categoryId: 2, description: "none", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "monster", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" },
    { id: 2, name: "mouse", price: 25, categoryId: 2, description: "none", imageUrl: "https://cdn.akakce.com/monster/monster-abra-a5-v16-4-i5-9300h-8-gb-250-gb-ssd-gtx1650-15-6-full-hd-notebook-z.jpg" }
  ]
  ngOnInit(): void {
  }

}
