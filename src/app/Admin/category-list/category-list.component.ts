import { Component } from '@angular/core';
import { Product, ProductCategory, ProductCategoryServiceProxy, ProductServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  productsCategory: ProductCategory[] = [];

  constructor(private _productcategoryService: ProductCategoryServiceProxy) {}

  ngOnInit(): void {
    this.loadCategoryData();
  }

  loadCategoryData(): void {
    this._productcategoryService.getAllCategory().subscribe((products) => {
      console.log(products);
      
      this.productsCategory = products;
    });
  }
}
