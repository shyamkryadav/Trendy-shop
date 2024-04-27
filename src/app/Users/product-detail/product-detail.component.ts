import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CartServiceProxy,
  Product,
  ProductServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { CommonModule } from '@angular/common';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  // imports: [CommonModule],
  imports: [CommonModule, ServiceProxyModule],

  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private _productProxcy: ProductServiceProxy,
    private _cartProxcy: CartServiceProxy,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this._productProxcy.getById(+productId).subscribe((res) => {
        console.log(res);
        this.product = res;
      });
    }
  }

  addToCart(id: number) {
    this._cartProxcy.addToCart(id).subscribe((res) => {
      console.log(res.productName);
       this.toastr.success(`${res.productName} added to cart`, 'Success');

      console.log(res);
    });
  }
}
