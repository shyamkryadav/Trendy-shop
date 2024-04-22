import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Product,
  ProductServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cu.component.html',
  styleUrl: './product-cu.component.css',
})
export class ProductCUComponent {
  products:any;
  constructor(
    private _productProxcy: ProductServiceProxy,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoadAllProductData();
  }

  LoadAllProductData() {
    this._productProxcy.getAllProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

}
