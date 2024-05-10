import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ProductCategory,
  ProductCategoryServiceProxy,
} from '../../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-add-category-dialog',
  standalone: true,
  imports: [FormsModule, ServiceProxyModule],
  templateUrl: './add-category-dialog.component.html',
  styleUrl: './add-category-dialog.component.css',
})
export class AddCategoryDialogComponent {
  productCategory: ProductCategory = new ProductCategory();

  constructor(
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private _productcategoryService: ProductCategoryServiceProxy
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this._productcategoryService
      .create(this.productCategory)
      .subscribe((res) => {
        this.dialogRef.close(true);
      });
  }
}
