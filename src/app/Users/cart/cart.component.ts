import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CartServiceProxy,
  ProductCart,
} from '../../../shared/service-proxies/service-proxies';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ServiceProxyModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: ProductCart[] = [];
  totalQuantity: number = 0;
  totalAmount: number = 0;
  deliveryAddress: string = '123 Main St, City, Country';

  constructor(
    private route: ActivatedRoute,
    private _cartProxcy: CartServiceProxy,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.LoadAllCartItem();
  }

  LoadAllCartItem() {
    this._cartProxcy.getCartItems().subscribe((res) => {
      if (res) {
        this.totalAmount = res.reduce(
          (total, product) => total + product.productPrice,
          0
        );

        this.products = res;
      }
    });
  }

  deleteCartItem(id: number) {
    this._cartProxcy.deleteCartItem(id).subscribe((res) => {
      console.log(res);
      if(res){
      this.LoadAllCartItem();
      this.toastr.error('Delete Cart Item');
      }
    });
  }

  addToCart(id: number) {
    // Implement your add to cart functionality
  }

  processPayment() {
    // Implement your payment processing functionality
  }
}
