import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductCategory,
  ProductServiceProxy,
  ProductCategoryServiceProxy,
  Product,
  CartServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ServiceProxyModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(
    private _productProxcy: ProductServiceProxy,
    private router: Router,
    private _cartProxcy: CartServiceProxy,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this._productProxcy.getAllProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
  addToCart(id: number) {
    this._cartProxcy.addToCart(id).subscribe((res) => {
      console.log(res.productName);
      this.toastr.success(`${res.productName} added to cart`, 'Success');

      console.log(res);
    });
  }
}
