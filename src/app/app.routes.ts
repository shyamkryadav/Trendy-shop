import { Routes } from '@angular/router';
import { ProductListComponent } from './Users/product-list/product-list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];
