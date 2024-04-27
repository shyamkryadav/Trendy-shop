import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  CartServiceProxy,
  ProductCart,
} from '../../shared/service-proxies/service-proxies';
import { ToastrService } from 'ngx-toastr';
import { ServiceProxyModule } from '../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ServiceProxyModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showLoginRegisterBox: boolean = false;

  toggleLoginRegisterBox() {
    this.showLoginRegisterBox = !this.showLoginRegisterBox;
  }

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
        console.log(res);
        this.totalQuantity = res.length
        this.products = res;
      }
    });
  }
}
