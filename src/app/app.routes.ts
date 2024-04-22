import { Routes } from '@angular/router';
import { ProductListComponent } from './Users/product-list/product-list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { CartComponent } from './Users/cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './Users/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
    data: { preload: true },
  },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];
