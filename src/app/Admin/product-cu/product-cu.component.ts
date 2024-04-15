import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-cu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cu.component.html',
  styleUrl: './product-cu.component.css',
})
export class ProductCUComponent {
  // constructor(private _appServices: AppService) {}

  // ngonInit(): void {
  //   this.fetchProduct();
  // }
  // fetchProduct() {
  //   console.log("shyam");

  //   this._appServices.getProduct().subscribe((res=>{
  //     console.log(res);
  //   }))
  // }
}
