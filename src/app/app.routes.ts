import { Routes } from '@angular/router';
import { ProductCUComponent } from './Admin/product-cu/product-cu.component';
import { ProductListComponent } from './Users/product-list/product-list.component';

export const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  //   { path: 'add-student', component: AddStudentComponent },
];
