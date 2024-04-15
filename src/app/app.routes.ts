import { Routes } from '@angular/router';
import { ProductListComponent } from './Users/product-list/product-list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { CartComponent } from './Users/cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
  },
  
  //  { path: '', redirectTo: '/admin', pathMatch: 'full' }, // Redirect to admin by default
  // { path: '**', redirectTo: '/admin' } // Redirect to admin for any other route
  
  { path: 'product', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];
