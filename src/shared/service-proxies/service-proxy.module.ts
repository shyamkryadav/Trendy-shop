// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import * as ApiServiceProxies from './service-proxies';



// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// export class ServiceProxyModule {}


import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ApiServiceProxies.ProductServiceProxy,
    ApiServiceProxies.ProductCategoryServiceProxy,
    ApiServiceProxies.UserServiceProxy,
    ApiServiceProxies.CartServiceProxy,
  ],
})
export class ServiceProxyModule {}

