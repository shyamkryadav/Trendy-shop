import { Component } from '@angular/core';
import {
  Product,
  ProductCategory,
  ProductCategoryServiceProxy,
  ProductServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../dialog/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  productsCategory: ProductCategory[] = [];

  constructor(
    private _productcategoryService: ProductCategoryServiceProxy,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCategoryData();
  }

  loadCategoryData(): void {
    this._productcategoryService.getAllCategory().subscribe((products) => {
      console.log(products);

      this.productsCategory = products;
    });
  }

  delete(id:number){
    this._productcategoryService.deleteProductCategory(id).subscribe((res)=>{
      console.log(res)
      if(res){
        this.loadCategoryData()
      }
    })
  }
  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadCategoryData();
      }
    });
  }
}
