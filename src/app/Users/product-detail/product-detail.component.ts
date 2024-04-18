import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { CommonModule } from '@angular/common';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';

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
    private _productProxcy: ProductServiceProxy
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
}
