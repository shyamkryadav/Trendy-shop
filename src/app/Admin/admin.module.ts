import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCUComponent } from './product-cu/product-cu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ServiceProxyModule } from '../../shared/service-proxies/service-proxy.module';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'product', component: ProductCUComponent },
          { path: 'category', component: CategoryListComponent },
        ],
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule, ServiceProxyModule],
  exports: [RouterModule],
})
export class AdminModule {}
