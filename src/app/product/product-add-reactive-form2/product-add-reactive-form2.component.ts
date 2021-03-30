import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-reactive-form2',
  templateUrl: './product-add-reactive-form2.component.html',
  styleUrls: ['./product-add-reactive-form2.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddReactiveForm2Component implements OnInit {

  constructor(private fromBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) { }

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];
  createproductAddForm() {
    this.productAddForm = this.fromBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],


    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }

    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla eklendi")
    })



  }

  ngOnInit(): void {
    this.createproductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
