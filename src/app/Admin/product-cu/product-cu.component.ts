import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Product,
  ProductServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cu',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-cu.component.html',
  styleUrl: './product-cu.component.css',
})
export class ProductCUComponent {
  product: Product = new Product();

  constructor(
    private _productProxcy: ProductServiceProxy,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.product);
    
    this._productProxcy.create(this.product).subscribe(
      (response) => {
        console.log('Product created successfully!', response);
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }
}
