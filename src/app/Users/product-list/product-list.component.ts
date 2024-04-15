import { Component } from '@angular/core';
import { Product } from '../../Interfce/product';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.http
      .get('https://localhost:7142/api/Product/GetAllProduct')
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
