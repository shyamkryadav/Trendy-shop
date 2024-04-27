import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private router: Router) {}
  gotoProduct() {
    this.router.navigate(['/admin/product']);
  }
  gotoCategory() {
    this.router.navigate(['/admin/category']);
  }
}
